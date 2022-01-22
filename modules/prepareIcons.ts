import unzipper from "unzipper";
import path from "path";
import fse from "fs-extra";

export interface IconData {
  kebabCaseName: string;
  pascalCaseName: string;
  src: string;
}

export interface NormalizedIcons {
  byName: Record<string, IconData>;
  allNames: string[];
}

const toPascalCase = (string: string, splitRegex: string | RegExp) => {
  const baseCase = string.split(splitRegex);

  return baseCase
    .map(part => part.charAt(0).toUpperCase() + part.substring(1))
    .join("");
};

const cleanSvgData = (data: string) => {
  return data
    .replace(/ fill=".+?"/g, "")
    .replace(/ fill-opacity=".+?"/g, "")
    .replace(/ clip-path=".+?"/g, "") // Fix visibility issue and save some bytes.
    .trim();
};

const rootPath = process.cwd();

const handoffStaticPath = (staticPath: string) =>
  staticPath.replace(path.join(rootPath, "/public"), "");

const prepareIcons = async () => {
  const icons: NormalizedIcons = { byName: {}, allNames: [] };

  const zipPath = path.join(rootPath, "public/static/sonnat-icons.zip");

  if (!fse.existsSync(zipPath))
    return { icons, zipPath: handoffStaticPath(zipPath) };

  await fse
    .createReadStream(zipPath)
    .pipe(unzipper.Parse())
    .on("entry", (entry: unzipper.Entry) => {
      void (async () => {
        // Only look for svg files
        if (entry.type === "File" && entry.path.endsWith(".svg")) {
          const buffer = await entry.buffer();
          const rawData = buffer.toString("utf-8");

          const cleanData = cleanSvgData(rawData);
          const kebabCaseName = entry.path.replace(".svg", "");
          const pascalCaseName = toPascalCase(kebabCaseName, "-");

          const instance = {
            kebabCaseName,
            pascalCaseName,
            src: cleanData
          };

          icons.byName[kebabCaseName] = instance;
          icons.allNames.push(kebabCaseName);
        } else {
          try {
            await entry.autodrain().promise();
          } catch (e) {
            // eslint-disable-next-line no-console
            console.error(e);
          }
        }
      })();
    })
    .promise();

  return { icons, zipPath: handoffStaticPath(zipPath) };
};

export default prepareIcons;
