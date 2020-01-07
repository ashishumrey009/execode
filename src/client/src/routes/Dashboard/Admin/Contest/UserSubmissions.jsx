import React, { Component } from "react";
import Modal from "react-modal";
import AceEditor from "react-ace";

export default class UserSubmissions extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      currentCode: "",
      submissions: [
        {
          id: 1,
          Challenge_name: "Waiting Line",
          marks_scored: 30,
          testcases_passed: 3,
          total_testcases: 5,
          code: `function processData(input) {
                var data = input.split('\n');
                var first = data[0].split(' ').map((a)=>Number(a));
                var arr = data[1].split(' ').map((a)=>Number(a)) ; 
                var len =first[0];
                mergeSort(arr,0,len-1);
                console.log(arr.join(' '));
                }
                function mergeSort(a,i,j){
                    if(i<j){
                        var mid =Math.floor((i+j)/2);
                        //console.log(mid)
                        mergeSort(a,i,mid);
                        mergeSort(a,mid+1,j);
                        merge(a,i,mid,j);
                    }
                
                }
                function merge(a,first,mid,last){
                    var  p = first ;
                    var  q = mid+1;
                    var Arr=[] ;
                    var k=0;

                for(var i = first ;i <= last ;i++) {
                    if(p > mid)    
                    Arr[k++] = a[q++] ;

                else if (q>last)   
                    Arr[k++]=a[p++];

                else if(a[p]<a[q])     
                    Arr[k++]=a[p++];

                else
                    Arr[k++]=a[q++];
                }
                // console.log(Arr,a)
                    for (var p=0 ; p<k ;p ++) {
                    a[first++] = Arr[p] ;                          
                }
                // console.log(Arr.join(''))
                }
                process.stdin.resume();
                process.stdin.setEncoding("ascii");
                _input = "";
                process.stdin.on("data", function (input) {
                    _input += input;
                });

                process.stdin.on("end", function () {
                processData(_input);
                });`
        },
        {
          id: 2,
          Challenge_name: "Merging Sort",
          marks_scored: 60,
          testcases_passed: 3,
          total_testcases: 5,
          code: `function processData(input) {
                var data = input.split('\n');
                var first = data[0].split(' ').map((a)=>Number(a));
                var arr = data[1].split(' ').map((a)=>Number(a)) ; 
                var len =first[0];
                mergeSort(arr,0,len-1);
                console.log(arr.join(' '));
                }
                function mergeSort(a,i,j){
                    if(i<j){
                        var mid =Math.floor((i+j)/2);
                        //console.log(mid)
                        mergeSort(a,i,mid);
                        mergeSort(a,mid+1,j);
                        merge(a,i,mid,j);
                    }
                
                }
                function merge(a,first,mid,last){
                    var  p = first ;
                    var  q = mid+1;
                    var Arr=[] ;
                    var k=0;

                for(var i = first ;i <= last ;i++) {
                    if(p > mid)    
                    Arr[k++] = a[q++] ;

                else if (q>last)   
                    Arr[k++]=a[p++];

                else if(a[p]<a[q])     
                    Arr[k++]=a[p++];

                else
                    Arr[k++]=a[q++];
                }
                // console.log(Arr,a)
                    for (var p=0 ; p<k ;p ++) {
                    a[first++] = Arr[p] ;                          
                }
                // console.log(Arr.join(''))
                }
                process.stdin.resume();
                process.stdin.setEncoding("ascii");
                _input = "";
                process.stdin.on("data", function (input) {
                    _input += input;
                });

                process.stdin.on("end", function () {
                processData(_input);
                });`
        },
        {
          id: 3,
          Challenge_name: "Quick sort",
          testcases_passed: 3,
          total_testcases: 5,
          marks_scored: 50,
          code: {}
        },
        {
          id: 4,
          Challenge_name: "Selection Sort",
          testcases_passed: 4,
          total_testcases: 5,
          marks_scored: 55,
          code: {}
        }
      ]
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal(e) {
    console.log(e.target.value);
    this.setState({ showModal: true, currentCode: e.target.value });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  // componentDidMount{
  // }
  render() {
    return (
      <>
        <div className="row d-flex justify-content-center">
          <table
            className="table table-striped text-center border border-success col-md-8 "
            style={{ marginTop: "100px" }}
          >
            <thead>
              <tr className="p-3 mb-2 bg-info text-white">
                {/* <th scope="col">S.no</th> */}
                <th scope="col">Username</th>
                <th scope="col">Passed Testcases</th>
                <th scope="col">Marks</th>
                <th scope="col">Code</th>
              </tr>
            </thead>
            <tbody>
              {this.state.submissions.map(ele => {
                return (
                  <tr>
                    {/* <th scope="row">{ele.id}</th> */}
                    <td>{ele.Challenge_name}</td>
                    <td>
                      {ele.testcases_passed}/{ele.total_testcases}
                    </td>
                    <td>{ele.marks_scored}</td>
                    <td>
                      {ele.Code}
                      <button
                        value={ele.code}
                        className="btn btn-success"
                        onClick={e => this.handleOpenModal(e)}
                      >
                        Code
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <Modal
            className=" mt-3 border border-primary"
            isOpen={this.state.showModal}
            contentLabel="Minimal Modal Example"
          >
            <div className="border border-primary">
              {/* {this.state.currentCode} */}
              <AceEditor
                mode="python"
                theme="github"
                value={this.state.currentCode}
                readOnly="true"
                editorProps={{ $blockScrolling: true }}
              />
            </div>
            <button className="btn btn-success" onClick={this.handleCloseModal}>
              Close
            </button>
          </Modal>
        </div>
      </>
    );
  }
}
