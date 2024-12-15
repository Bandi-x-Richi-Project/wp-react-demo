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
  name: string;
  url: string;
  description: string;
  link: string;
  slug: string;
  avatar_urls: {
    "24": string;
    "48": string;
    "96": string;
  };
  meta: unknown[];
  _links: {
    self: {
      href: string;
      targetHints: {
        allow: string[];
      };
    }[];
    collection: {
      href: string;
    }[];
  };
}
