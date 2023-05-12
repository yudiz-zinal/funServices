import { Col, Container, Row } from "react-bootstrap";

import "./style.scss";
import userPic from "../../../assets/images/dummy/user-img.jpg";
import editPic from "../../../assets/images/icon/edit-icon.svg";
import BreadcrumbNav from "../CofrsAdmin/BreadCrumNav";
import { useState } from "react";
import TextField from "src/components/TextField";
import { VNode } from "preact";
import PhoneInput from "src/components/PhoneInput";
import { accountAtom } from "src/recoilState/account";
import { getRecoil } from "recoil-nexus";

const EditAdminProfile = () => {
  const pathNames: string[] = location.pathname
    .split("/")
    .filter((pathname) => pathname);

  const account = getRecoil<AccountModel | undefined>(accountAtom);
  const [fields, updateFields] = useState<Array<InputFieldType>>([
    {
      type: "text",
      value: "",
      key: "userName",
      name: "Name",
      placeHolder: "Please enter Name",
      error: "",
      maxLength: 50,
      rules: "required|name|max:50",
      className: "form-control input-field",
    },
    {
      type: "text",
      value: "",
      key: "userEmail",
      name: "Email id",
      placeHolder: "Please enter Email id",
      error: "",
      maxLength: 50,
      rules: "required|email|max:50",
      className: "form-control input-field",
    },
    {
      type: "text",
      value: "",
      key: "phoneNumber",
      name: "Mobile Number",
      placeHolder: "Please enter Mobile Number",
      error: "",
      maxLength: 50,
      rules: "required|email|max:20",
      className: "form-control input-field",
    },
  ]);
  const updateOneField = (
    index: number,
    fieldName: string,
    value: any
  ): void => {
    updateFields((prevState): Array<InputFieldType> => {
      prevState[index] = { ...prevState[index], [fieldName]: value };
      return [...prevState];
    });
  };

  const renderInputs = (): VNode => {
    return (
      <div>
        {fields.map((field: InputFieldType, index: number) => {
          if (field?.key === "phoneNumber") {
            return (
              <div class="from-group">
                <label
                  for="formGroupExampleInput"
                  class="form-label input-label-fonts"
                >
                  {field?.name}
                </label>
                <PhoneInput
                  value={field?.value}
                  placeholder={field.placeHolder}
                  onChange={(newValue: string) => {
                    updateOneField(index, "value", newValue);
                  }}
                  className={field?.className}
                />
              </div>
            );
          } else {
            return (
              <div class="from-group">
                <label
                  for="formGroupExampleInput"
                  class="form-label input-label-fonts"
                >
                  {field?.name}
                </label>
                <TextField
                  type={field.type}
                  value={field.value}
                  onChange={(newValue: string) =>
                    updateOneField(index, "value", newValue)
                  }
                  placeHolder={field.placeHolder}
                  error={field.error}
                  className={field?.className}
                ></TextField>
              </div>
            );
          }
        })}
      </div>
    );
  };

  return (
    <>
      {" "}
      <Container>
        <BreadcrumbNav />
        <section className="profile-section mb-3 mb-md-5">
          <div className="title d-flex justify-content-between align-items-center pb-3">
            <h1 class="mb-0">Edit Profile Details</h1>
          </div>
          <Row className="justify-content-center">
            <Col md={8}>
              <div className="profile-pic d-flex align-items-center justify-content-center mx-auto mb-3 mb-md-4 mb-xl-5 position-relative">
                <img src={userPic} className="rounded-circle overflow-hidden" />
                <div className="edit-pic position-absolute rounded-circle overflow-hidden d-flex align-items-center justify-content-center">
                  <input
                    type="file"
                    className="position-absolute w-100 h-100 opacity-0"
                  />
                  <img src={editPic} className="w-75 h-75" />
                </div>
              </div>

              {renderInputs()}
              <div className="d-flex justify-content-center">
                <button className="theme-btn small-btn me-2 me-md-4">
                  Save
                </button>
                <button className="theme-btn small-btn light-btn">
                  Cancel
                </button>
              </div>
            </Col>
          </Row>
        </section>
      </Container>
    </>
  );
};
export default EditAdminProfile;
