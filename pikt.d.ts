declare module '@arnau/pikt' {
  interface Config {
    classes: string;
  }

  export async function render(source: string, config: Config): string;
}
