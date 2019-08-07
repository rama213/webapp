import React from "react";
import Field from "egov-ui-kit/utils/field";
import { Button, Card } from "components";
import Label from "egov-ui-kit/utils/translationNode";
import "./index.css";

const SearchPropertyForm = ({
  handleFieldChange,
  form,
  formKey,
  onSearchClick,
  onResetClick
}) => {
  const fields = form.fields || {};

  return (

    <div className="form-without-button-cont-generic">
      <Card
        textChildren={
          <div >
            <div className="search-form-header">

             <Label
            label="PT_SEARCH_PROPERTY"
            dark={true}
            fontSize={18}
            fontWeight={1200}
            bold={true}
          /> 
            <Label
            label="PT_SEARCHPROPERTY_SEARCH_CONDITION"
            dark={true}
            fontSize={16}
            fontWeight={800}
            bold={true}
          /> 
          </div>
          <div className={`${formKey} col-xs-12`}>
            {Object.keys(fields).map((fieldKey, index) => {
              return (
                <div>             
                <div
                  style={
                    fields[fieldKey].toolTip
                      ? { display: "flex", alignItems: "center" }
                      : {}
                  }
                  key={index}
                  className={
                    fields[fieldKey].numcols
                      ? `col-sm-${fields[fieldKey].numcols}`
                      : `col-sm-4`
                  }
                >
                  <Field
                    fieldKey={fieldKey}
                    field={fields[fieldKey]}
                    handleFieldChange={handleFieldChange}
                  />
                </div>
                </div>);
            })}
              <div className="col-md-12">
              <div className="reset-property-btn">
              <Button
                label={
                  <Label
                    label="PT_RESET_BUTTON"
                    buttonLabel={true}
                    fontSize="16px"
                    color="gray"
                  />
                }
                className=""
                onClick={() => onResetClick()}
                primary={false}
                labelStyle={{ color: "rgb(105, 105, 105)" }}
                backgroundColor="white"
                fullWidth={true}
                style={{
                  backgroundColor: "white",
                  color: "rgb(105, 105, 105)"
                }}
                
              />
              </div>
            {/* </div>
            <div className="col-md-6"> */}
            <div className="search-property-btn">
              <Button
                label={
                  <Label
                    label="PT_SEARCH_BUTTON"
                    buttonLabel={true}
                    fontSize="16px"
                  />
                }
                className=""
                onClick={() => onSearchClick(form, formKey)}
                primary={false}
                backgroundColor="grey"
                labelStyle={{ color: "white" }}
                fullWidth={true}
                style={{
                  color: "white",
                  backgroundColor: "rgb(105, 105, 105)"
                }}
              />
              </div>
            </div>
          </div>
        </div>}
      />
    </div>
  );
};

export default SearchPropertyForm;
