export interface JwtResponse extends JwtUserResponse {
  token: string;
}

export interface JwtUserResponse {
  user_email: string;
  user_nicename: string;
  user_display_name: string;
}

export interface User {
  id: number;
  username: string;
  name: string;
  first_name: string;
  last_name: string;
  email: string;
  url: string;
  description: string;
  link: string;
  locale: string;
  nickname: string;
  slug: string;
  roles: (
    | "subscriber"
    | "administrator"
    | "contributor"
    | "author"
    | "editor"
  )[];
  registered_date: string;
  capabilities: {
    [key: string]: boolean;
  };
  extra_capabilities: {
    administrator: boolean;
  };
  avatar_urls: {
    "24": string;
    "48": string;
    "96": string;
  };
  meta: {
    persisted_preferences: {
      core: {
        isComplementaryAreaVisible: boolean;
      };
      _modified: string;
    };
  };
  _links: {
    [key: string]: boolean;
  };
}
