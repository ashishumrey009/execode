import React from "react";

export default class TodayContest extends React.Component {
  constructor() {
    super();
    this.state = {
      contests: [
        {
          contest_id: "INTEGER",
          contest_name: "Today's Contest",
          start_date: "DATETIME",
          end_date: "DATETIME",
          end_time: "DATETIME",
          details: "STRING",
          show_leader_board: "DATETIME"
        },
        {
          contest_id: "INTEGER",
          contest_name: "Contest-1",
          start_date: "DATETIME",
          end_date: "DATETIME",
          end_time: "DATETIME",
          details: "STRING",
          show_leader_board: "DATETIME"
        },
        {
          contest_id: "INTEGER",
          contest_name: "Contest-2",
          start_date: "DATETIME",
          end_date: "DATETIME",
          end_time: "DATETIME",
          details: "STRING",
          show_leader_board: "DATETIME"
        },
        {
          contest_id: "INTEGER",
          contest_name: "Contest-3",
          start_date: "DATETIME",
          end_date: "DATETIME",
          end_time: "DATETIME",
          details: "STRING",
          show_leader_board: "DATETIME"
        },
        {
          contest_id: "INTEGER",
          contest_name: "Contest-4",
          start_date: "DATETIME",
          end_date: "DATETIME",
          end_time: "DATETIME",
          details: "STRING",
          show_leader_board: "DATETIME"
        }
      ],
      comments: "abc"
    };
  }

  render() {
    const { contests: contestFinalData } = this.state;
    const res = contestFinalData.slice(1).map((e, index) => {
      return (
        <div className="col-xl-5 col-sm-12 col-md-6  mb-3 ml-5  card shadow ">
          <div className="row align-items-center justify-content-around card-body">
            <div className="col-xs-8 col-sm-8">
              <h3>Contest Name</h3>
              <p>Start Time | End Time | Start Date | End Date</p>
            </div>
            <div className="col-xs-4 col-sm-4 p-1">
              <button className="btn btn-success border">
                View Submission
              </button>
            </div>
          </div>
        </div>
      );
    });
    console.log(res);
    return (
      <div>
        <div className="container-fulid ml-5 my-3">
          <div className="row  p-3 ">
            <div className="col-xs-12 col-sm-12 col-md-6  mb-3 mr-2 card shadow">
              <div className="row align-items-center ">
                <div className="col-xs-8 col-sm-8">
                  <h3>Contest Name</h3>
                  <p>Start Time | End Time | Start Date | End Date</p>
                </div>
                <div className="col-xs-4 col-sm-4 p-1">
                  <button className="btn btn-success border">
                    View Submission
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row ">{res}</div>
        </div>
      </div>
    );
  }
}
