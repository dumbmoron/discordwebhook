export type WebhookOptions = {
  url: string
};

export class Webhook {
  constructor(url: string);
  setUsername(username: string): void;
  setAvatar(avatar: string): void;
  sendFile(filePath: string): Promise<void>;
  send(message: MessageBuilder | string): Promise<void>;
  info(
    title: string,
    fieldName?: string,
    fieldValue?: string,
    inline?: boolean
  ): Promise<void>;
  success(
    title: string,
    fieldName?: string,
    fieldValue?: string,
    inline?: boolean
  ): Promise<void>;
  warning(
    title: string,
    fieldName?: string,
    fieldValue?: string,
    inline?: boolean
  ): Promise<void>;
  error(
    title: string,
    fieldName?: string,
    fieldValue?: string,
    inline?: boolean
  ): Promise<void>;
}

export type WebhookField = {
  name: string;
  value: string;
  inline?: boolean;
};

export type WebhookEmbed = {
  author?: {
    name?: string;
    url?: string;
    icon_url?: string;
  };
  title?: string;
  url?: string;
  thumbnail?: {
    url?: string;
  };
  image?: {
    url?: string;
  };
  timestamp?: Date;
  color?: number;
  description?: string;
  fields: WebhookField[];
  footer?: {
    text: string;
    icon_url?: string;
  };
};

export type WebhookPayload = {
  embeds: WebhookEmbed[];
};

export class MessageBuilder {
  constructor();
  getJSON(): WebhookPayload;
  setText(text: string): this;
  setAuthor(author?: string, authorImage?: string, authorUrl?: string): this;
  setTitle(title: string): this;
  setUrl(url: string): this;
  setThumbnail(thumbnailUrl: string): this;
  setImage(image: string): this;
  setTimestamp(): this;
  setColor(color: number): this;
  setDescription(description: string): this;
  addField(fieldName: string, fieldValue: string, inline?: boolean): this;
  setFooter(footer: string, footerImage?: string): this;
}