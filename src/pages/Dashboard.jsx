
import React from 'react'

const Dashboard = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-10 ">
            <div className="card text-center">
              <div className="card-header">
                <div className="card-title">
                  <h4>Select User Type</h4>
                </div>
              </div>
              <div className="card-body pe-auto">
                <div className="row">
                  <div className="col-md-4 mb-3 ">
                    <div className="card py-3 h-100">

                      <div className="card-title h6 ">Admin</div>
                      <div className="card-text">Manage Teacher & Students</div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="card  py-3  h-100">
                      <div className="card-title h6 ">Teacher</div>
                      <div className="card-text">Manage Question, Exam Schedule, Student Result, can accecss personal dashboard </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="card  py-3 h-100">
                      <div className="card-title h6 ">Student</div>
                      <div className="card-text">Access Personal Dashboard</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
export default Dashboard;