export default interface MDT {
    id: Number;
        attributes: {
            title: String; 
            description: String;
            StartActivity: Date;
            EndActivity: Date;
            StartRegister: Date;
            EndRegister: Date;
            Number: Number;
            image: {
                data: {
                    attributes: {
                        formats: {
                            thumbnail: {
                                url: string;

                            }
                        }

                    }
                }
            }
        }
    }