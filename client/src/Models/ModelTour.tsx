export default interface MDT {
    id: Number;
    attributes: {
        title: String;
        description: String;
        detail: string;
        StartActivity: Date;
        EndActivity: Date;
        StartRegister: Date;
        EndRegister: Date;
        Number: Number;
        likeCount: Number;
        image: {
            data: {
                attributes: {
                    url: string;
                }
            }
        }
    }
}