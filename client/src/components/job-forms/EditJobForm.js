import React, { Fragment, useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addJob } from "../../actions/job";

const EditJobForm = ({ addJob, editing, setEditing, currentJob, history }) => {
  const [formData, setFormData] = useState(currentJob);

  useEffect(() => {
    setFormData(currentJob);
  }, [currentJob]);

  const jobName = formData.jobName;
  const jobCost = formData.jobCost;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const clearForm = () => {
    setFormData({ ...formData, jobName: "", jobCost: "" });
    setEditing(false);
  };

  return (
    <Fragment>
      {/* <form
        class="form"
        onSubmit={(e) => {
          e.preventDefault();
          addJob(formData, history, true);
          clearForm();
        }}
      >
        <div className="form-group add-flex" >
          <div class="col-md-4">
            <input
              type="text"
              placeholder="* Tên công việc"
              name="jobName"
              value={formData.jobName}
              onChange={(e) => onChange(e)}
              style={{ fontSize: '14px' }}
              required
            />

          </div>
          <div class="col-md-4" >
            <input
              type="text"
              placeholder="* Số tiền"
              name="jobCost"
              value={formData.jobCost}
              onChange={(e) => onChange(e)}
              style={{ fontSize: '14px' }}
              required
            />
          </div>
          <div class="col-md-6" >
            <button type="submit" class="btn btn-info"><i class="fas fa-save"></i>
              <span className="hide-sm"> Lưu</span>
            </button>
            <button
              onClick={() => setEditing(false)}
              class="btn btn-warning"
            ><i class="fas fa-times"></i>
              <span className="hide-sm"> Hủy</span>
            </button>
          </div>
        </div>
      </form> */}
      <div className="row">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addJob(formData, history, true);
            clearForm();
          }}
        >
          <div className="form-body">
            <div className="row p-t-5 m-l-5">
              <div className="col-md-addJob-4">
                <div className="form-group has-success">
                  <input
                    type="text"
                    placeholder="* Tên công việc"
                    name="jobName"
                    value={formData.jobName}
                    className="form-control"
                    onChange={(e) => onChange(e)}
                    style={{ fontSize: '14px' }}
                    required
                  />
                </div>
              </div>
              <div className="col-md-addJob-4">
                <div className="form-group has-success">
                  <input
                    type="text"
                    placeholder="* Số tiền"
                    name="jobCost"
                    className="form-control"
                    value={formData.jobCost}
                    onChange={(e) => onChange(e)}
                    style={{ fontSize: '14px' }}
                    required
                  />
                </div>
              </div>
              <div className="col-md-addJob-4">
                <div className="form-actions">
                  <button type="submit" class="btn btn-info"><i class="fas fa-save"></i> Lưu</button>
                  <button
                    onClick={() => setEditing(false)}
                    class="btn btn-warning"
                  ><i class="fas fa-times"></i> Hủy</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

EditJobForm.propTypes = {
  addJob: PropTypes.func.isRequired,
  setEditing: PropTypes.func.isRequired,
};

export default connect(null, { addJob })(withRouter(EditJobForm));
