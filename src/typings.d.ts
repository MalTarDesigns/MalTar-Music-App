/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

// models
interface IAuthenticate {
  email: string;
  password: string;
}

interface IUser {
  email: string
  name?: string
  id?: any;
  avatar?: string | null;
  role?: string;
}

interface IMusic {
  title: string
  producer: string
  artworkUrl?: string
  genre: string
  price: Number
  url: string
  likes?: Number
}
