/**
 * activity controller
 */

import { factories } from '@strapi/strapi'
import { parseMultipartData } from '@strapi/utils'

export default factories.createCoreController('api::activity.activity', ({ strapi }) => ({
    async update(ctx) {
      const entityId = ctx.params.id;
      let entity;
    const activity = await strapi.entityService.findOne('api::activity.activity', entityId, {
        populate: { owner: true },
    });
    if (!activity) {
        return ctx.notFound('Not Found');
      }
    if (activity.owner?.id !== ctx.state.user.id) {
        return ctx.unauthorized('You cant update this entry');
      }
      if (ctx.is('multipart')) {
        const { data, files } = parseMultipartData(ctx);
        entity = await strapi.entityService.update('api::activity.activity', entityId, { data }, { files });
      } else {
        entity = await strapi.entityService.update('api::activity.activity', entityId, ctx.request.body);
      }
      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
      return this.transformResponse(sanitizedEntity);
  },

  async like(ctx) {
    const entityId = ctx.params.id;
    try {
        let activity = await strapi.entityService.findOne('api::activity.activity', entityId)
        activity = await strapi.entityService.update('api::activity.activity', entityId, { data: { likeCount: (activity.likeCount || 0) + 1} })
        ctx.body = { ok: 1, likeCount: activity.likeCount };
    } catch (err) {
        ctx.body = err;
    }
},

}));

