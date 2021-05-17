import { Download, GithubCat, Magnifier } from "@sonnat/icons";
import Button from "@sonnat/ui/Button";
import ChoiceChip from "@sonnat/ui/ChoiceChip";
import Code from "@sonnat/ui/Code";
import Column from "@sonnat/ui/Column";
import Container from "@sonnat/ui/Container";
import Divider from "@sonnat/ui/Divider";
import type { IconProps } from "@sonnat/ui/Icon";
import InputAdornment from "@sonnat/ui/InputAdornment";
import Row from "@sonnat/ui/Row";
import makeStyles from "@sonnat/ui/styles/makeStyles";
import throttle from "lodash.throttle";
import Text from "@sonnat/ui/Text";
import TextField from "@sonnat/ui/TextField";
import WithSidebar from "components/layouts/WithSidebar";
import IconDrawer from "components/partials/IconDrawer";
import IconSample from "components/partials/IconSample";
import useIsomorphicLayoutEffect from "utils/useIsomorphicLayoutEffect";
import globAsync from "fast-glob";
import fse from "fs-extra";
import { GetStaticProps } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import path from "path";
import * as React from "react";
import { defaultKeywordsMetaContent, siteFullAddress } from "sharedVars";
import type { NextPageWithLayout } from "types";
import {
  setCanonicalMeta,
  setDescriptionMeta,
  setKeywordsMeta,
  setTitleMeta
} from "utils";

const pageName = "IconsPackagePage";

const useStyles = makeStyles(
  theme => {
    const {
      breakpoints,
      typography: { pxToRem, variants }
    } = theme;

    return {
      section: {},
      sectionHead: {},
      sectionBody: {},
      heading: {},
      description: {
        marginTop: pxToRem(16),
        marginBottom: pxToRem(32)
      },
      headActionBar: {
        display: "flex",
        alignItems: "center",
        marginBottom: pxToRem(32),
        "& > * + *": {
          marginLeft: pxToRem(8)
        }
      },
      bodyActionBar: {
        marginTop: pxToRem(32),
        marginBottom: pxToRem(32),
        display: "flex",
        alignItems: "center"
      },
      searchField: {
        marginRight: pxToRem(32)
      },
      fieldSeparator: {
        marginTop: pxToRem(8),
        marginBottom: pxToRem(8)
      },
      chips: { display: "flex", alignItems: "center", marginLeft: pxToRem(64) },
      filledChip: { marginRight: pxToRem(8) },
      outlinedChip: {},
      iconSample: {
        marginBottom: pxToRem(16)
      },
      [breakpoints.down("sm")]: {
        heading: {
          fontSize: variants.h4.fontSize
        },
        headActionBar: {
          "& > *": {
            flexShrink: 0,
            flexGrow: 1
          }
        },
        bodyActionBar: {
          flexDirection: "column",
          alignItems: "flex-start"
        },
        searchField: { marginRight: 0, marginBottom: pxToRem(16) },
        chips: { marginLeft: 0 },
        fieldSeparator: { display: "none" }
      }
    };
  },
  { name: pageName }
);

interface IconData {
  kebabCaseName: string;
  pascalCaseName: string;
  file: string;
}

interface IconDataState extends IconData {
  component: React.ReactNode;
}

interface IconsProp {
  byName: {
    [P: string]: IconData;
  };
  allNames: string[];
}

interface PageProps {
  icons: IconsProp;
  zipPath: string;
}

const IconsPackagePage: NextPageWithLayout<PageProps> = ({
  icons,
  zipPath
}) => {
  const classes = useStyles();

  const [filteredIcons, setFilteredIcons] = React.useState<
    JSX.Element[] | null
  >(null);

  const [variant, setVariant] = React.useState<"filled" | "outlined" | "">("");
  const [isDrawerOpen, setDrawerOpen] = React.useState(false);
  const [selectedIcon, setSelectedIcon] = React.useState<IconDataState | null>(
    null
  );

  const onIconSelect = (iconData: IconDataState) => {
    setSelectedIcon(iconData);
    setDrawerOpen(true);
  };

  const cachedSource = React.useMemo(() => {
    return icons.allNames.map(iconName => {
      const iconData = icons.byName[iconName];

      const IconComponent = dynamic<IconProps>(
        // @ts-ignore
        async () => await import(`@sonnat/icons`)[iconData.pascalCaseName]
      );

      return (
        <Column
          data-key={`${iconData.kebabCaseName}`}
          key={iconData.pascalCaseName}
          sm={2}
        >
          <IconSample
            className={classes.iconSample}
            icon={<IconComponent />}
            name={iconData.kebabCaseName}
            onSelect={() =>
              void onIconSelect({
                ...iconData,
                component: <IconComponent color="textSecondary" />
              })
            }
          />
        </Column>
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useIsomorphicLayoutEffect(() => {
    setFilteredIcons(cachedSource);
  }, [cachedSource]);

  const onSearch = (value: string) => {
    const key = value.toLowerCase();

    if (key && key.length >= 2) {
      const filtered = cachedSource.filter(jsx => {
        const jsxKey: string = jsx.props["data-key"];

        return jsxKey.includes(key);
      });

      setFilteredIcons(filtered);
    } else setFilteredIcons(cachedSource);
  };

  const cachedResult = React.useMemo(() => {
    if (variant === "filled") {
      return filteredIcons?.filter(jsx => {
        const jsxKey: string = jsx.props["data-key"];

        return !jsxKey.includes("-o");
      });
    } else if (variant === "outlined") {
      return filteredIcons?.filter(jsx => {
        const jsxKey: string = jsx.props["data-key"];

        return jsxKey.includes("-o");
      });
    } else return filteredIcons;
  }, [variant, filteredIcons]);

  return (
    <React.Fragment>
      <Head>
        {setTitleMeta(
          "Sonnat-Icons | Sonnat Developer Tools, React Components & Resources"
        )}
        {setDescriptionMeta(
          "The growing icon collection that allows designers and developers to download or install SVG Icons for any projects."
        )}
        {setCanonicalMeta(siteFullAddress)}
        {setKeywordsMeta([
          ...defaultKeywordsMetaContent,
          "sonnat",
          "icons",
          "sonnat-icons",
          "@sonnat/icons",
          "react",
          "svg"
        ])}
      </Head>
      <main id="main">
        <section id="main-section" className={classes.section}>
          <Container>
            <div className={classes.sectionHead}>
              <Text className={classes.heading} variant="h3" rootNode="h1">
                Sonnat Icon Set
              </Text>
              <Text className={classes.description} variant="body" rootNode="p">
                The growing icon collection that allows designers and developers
                to download or install SVG Icons for any projects.
                <br />
                Start using it in ReactJS projects:{" "}
                <Code>{`npm install @sonnat/icons`}</Code> or{" "}
                <Code>{`yarn add @sonnat/icons`}</Code>.
              </Text>
              <div className={classes.headActionBar}>
                <Button
                  rootNode="a"
                  download="sonnat-icons.zip"
                  href={zipPath}
                  label="Download"
                  leadingIcon={<Download />}
                  color="primary"
                />
                <Button
                  rootNode="a"
                  href="https://github.com/sonnat/sonnat-ui/tree/next/packages/sonnat-icons"
                  target="_blank"
                  rel="noopener noreferrer"
                  label="Github"
                  leadingIcon={<GithubCat />}
                  variant="inlined"
                />
              </div>
              <Divider />
            </div>
            <div className={classes.sectionBody}>
              <div className={classes.bodyActionBar}>
                <TextField
                  fluid
                  onChange={e => void throttle(onSearch, 250)(e.target.value)}
                  className={classes.searchField}
                  placeholder="Search for icon"
                  leadingAdornment={
                    <InputAdornment variant="icon">
                      <Magnifier />
                    </InputAdornment>
                  }
                />
                <Divider vertical className={classes.fieldSeparator} />
                <div className={classes.chips}>
                  <ChoiceChip
                    className={classes.filledChip}
                    label="Filled"
                    variant="outlined"
                    rounded
                    color="primary"
                    selected={variant === "filled"}
                    onToggle={(_, isSelected) =>
                      void (isSelected ? setVariant("filled") : setVariant(""))
                    }
                  />
                  <ChoiceChip
                    className={classes.outlinedChip}
                    label="Outlined"
                    variant="outlined"
                    rounded
                    color="primary"
                    selected={variant === "outlined"}
                    onToggle={(_, isSelected) =>
                      void (isSelected
                        ? setVariant("outlined")
                        : setVariant(""))
                    }
                  />
                </div>
              </div>
              <div className={classes.bodyContent}>
                <Container fluid noPadding>
                  <Row>{cachedResult}</Row>
                </Container>
              </div>
            </div>
          </Container>
        </section>
        <IconDrawer
          data={selectedIcon}
          open={isDrawerOpen}
          toggle={() => void setDrawerOpen(!isDrawerOpen)}
        />
      </main>
    </React.Fragment>
  );
};

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

export const getStaticProps: GetStaticProps = async () => {
  const icons: IconsProp = { byName: {}, allNames: [] };

  const rootPath = process.cwd();
  const svgsSrc = path.join(rootPath, "public/static/svgs");
  const zipPath = path.join(rootPath, "public/static/sonnat-icons.zip");

  const iconsExist = fse.existsSync(svgsSrc);
  if (!iconsExist) return { props: { icons } };

  const svgs = await globAsync(path.join(svgsSrc, "**/*.svg"));
  if (!svgs || !svgs.length) return { props: { icons } };

  await Promise.all(
    svgs.map(async svgPath => {
      const normalizedSvgPath = path.normalize(svgPath);
      const svgPathObj = path.parse(normalizedSvgPath);

      const initData = await fse.readFile(svgPath, { encoding: "utf8" });
      const cleansedData = cleanSvgData(initData);
      const kebabCaseName = svgPathObj.name;
      const pascalCaseName = toPascalCase(kebabCaseName, "-");

      await fse.writeFile(svgPath, cleansedData);
      const instance = {
        kebabCaseName,
        pascalCaseName,
        file: normalizedSvgPath.replace(path.join(rootPath, "/public"), "")
      };

      icons.byName[kebabCaseName] = instance;
      icons.allNames.push(kebabCaseName);
    })
  );

  return {
    props: {
      icons,
      zipPath: zipPath.replace(path.join(rootPath, "/public"), "")
    }
  };
};

const PageLayout = (page: React.ReactNode) => {
  return <WithSidebar>{page}</WithSidebar>;
};

IconsPackagePage.getLayout = () => PageLayout;
IconsPackagePage.displayName = pageName;

export default IconsPackagePage;
