import { Breadcrumb } from "react-bootstrap";
import "./style.scss"

function BreadcrumbNav() {
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
          Account Details
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Edit Profile Details</Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
}
export default BreadcrumbNav;