import Router, { useRouter } from "next/router";
import { Button } from "antd";

export const getKey = (map, val) => {
    return [...map].find(([key, value]) => val === value)[0];
}

const getButtonType: any = (link, linksMap: string) => {
    const router = useRouter();
    const currentRoute = getKey(linksMap, router.pathname);
    return link === currentRoute ? "primary" : "secondary"
}


export const createNavButtons = (linksMap) => {
    const links = [];
    linksMap.forEach((value, key, map) =>
        links.push(
            <Button key={key} type={getButtonType(key, map)} onClick={() => {
                Router.push(value)
            }}> {key.toUpperCase()} </Button>))
    return links;
}