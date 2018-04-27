/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

interface IAuthenticate {
  email: string;
  password: string;
}

interface AuthState {
  pending: boolean
  loggedIn: boolean
  user: IUser | null;
  error: string
}

interface IUser {
  email: string
  name?: string
  id?: any;
  avatar?: string | null;
  role?: string;
}
interface Errors {
  effectError: string;
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
