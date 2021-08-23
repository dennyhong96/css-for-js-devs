import Link from "next/link";

import { CrumbList, Crumb, CrumbLink } from "./styles";

const Breadcrumb = ({ children }) => {
	return (
		<nav aria-label="Breadcrumb">
			<CrumbList>{children}</CrumbList>
		</nav>
	);
};

const BreadcrumbItem = ({ children, ...rest }) => {
	return (
		<Crumb>
			<Link {...rest} passHref>
				<CrumbLink>{children}</CrumbLink>
			</Link>
		</Crumb>
	);
};

Breadcrumb.Item = BreadcrumbItem;
export default Breadcrumb;
