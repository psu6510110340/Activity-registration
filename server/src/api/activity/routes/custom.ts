'use strict';

module.exports = {
    routes: [//custom router
        {
            method: 'GET',
            path: '/activity/:id/like',
            handler: 'activity.like'
        }
    ]
}
