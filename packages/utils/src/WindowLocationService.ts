export class WindowLocationService {
  public static get origin(): string {
    return this.getLocation().origin;
  }

  public static get path(): string {
    return this.getLocation().pathname;
  }

  public static get hash(): string {
    return this.getLocation().hash;
  }

  public static get search(): string {
    return this.getLocation().search;
  }

  public static get host(): string {
    return this.getLocation().host;
  }

  public static redirectTo(url: string): void {
    this.getLocation().assign(url);
  }

  private static getLocation(): Location {
    return window.location;
  }
}
