/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

interface IUser {
  email: String
  password: String
  confirmPassword?: String
  name?: String
  role?: String
}
interface IBeat {
  title: String
  producer: String
  artworkUrl?: String
  genre: String
  price: Number
  url: String
  likes?: Number
}
