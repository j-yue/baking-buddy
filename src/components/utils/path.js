//extract page title from path
const headerFromPath = (path) => {
  const pathName = path.pathname;
  if (pathName === "/") return "HOME";

  const splitPath = pathName.split("/");

  if (splitPath[1] === "substitute") return splitPath[2].split("_").join(" ");
  return splitPath[1].toUpperCase();
};

export { headerFromPath };
