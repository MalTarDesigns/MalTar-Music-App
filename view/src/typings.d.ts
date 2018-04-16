/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

interface IAuthenticate {
  email: string;
  password: string;
  name?: string;
  username?: string;
}

interface IUser {
  email: string
  password: string
  confirmPassword?: string
  name?: string
  id: number;
  image: string | null;
  role: string;
}

interface IBeat {
  title: string
  producer: string
  artworkUrl?: string
  genre: string
  price: Number
  url: string
  likes?: Number
}
