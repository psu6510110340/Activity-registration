export default interface User {
    type: string;
    id: number;
    username: string;
    role: {
      type: string;
    };
  }