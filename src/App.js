import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Index from "./pages/Index/Index";
import HomeworkDetail from "./pages/HomeworkDetail/HomeworkDetail";
import Homework from "./pages/Homework/Homework";
import HomeworkList from "./pages/HomeworkList/HomeworkList";
import Mine from "./pages/Mine/Mine";
import Repair from "./pages/Repair/Repair";
import RepairDetail from "./pages/RepairDetail/RepairDetail";
import RepairList from "./pages/RepairList/RepairList";
import Teacher from "./pages/Teacher/Teacher";
import TeacherDetail from "./pages/TeacherDetail/TeacherDetail";
import TeacherList from "./pages/TeacherList/TeacherList";
import WaterDetail from "./pages/WaterDetail/WaterDetail";
import WaterList from "./pages/WaterList/WaterList";
import Ask from "./pages/Ask/Ask";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Wait from "./pages/Wait/Wait";
import ChangePass from "./pages/ChangePass/ChangePass";
import $ from 'jquery'
import './App.css'
export default class App extends Component {
  state = {}
  componentDidMount(){
    $(".loading").hide()
  }
  render() {
   
    return (
      <div>
        <Switch>
          <Route path="/index" component={Index}></Route>
          <Route path="/homework-detail/:id" component={HomeworkDetail}></Route>
          <Route path="/homework" component={Homework}></Route>
          <Route path="/homework-list/:type" component={HomeworkList}></Route>
          <Route path="/mine" component={Mine}></Route>
          <Route path="/repair" component={Repair}></Route>
          <Route path="/repair-detail/:id" component={RepairDetail}></Route>
          <Route path="/repair-list" component={RepairList}></Route>
          <Route path="/teacher" component={Teacher}></Route>
          <Route path="/teacher-detail" component={TeacherDetail}></Route>
          <Route path="/teacher-list" component={TeacherList}></Route>
          <Route path="/water-detail/:id" component={WaterDetail}></Route>
          <Route path="/water-list" component={WaterList}></Route>
          <Route path="/ask" component={Ask}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/changepass" component={ChangePass}></Route>
          <Route path="/wait" component={Wait}></Route>
          <Redirect to="/login"></Redirect>
        </Switch>
        <div ref="maskloading" className="loading" >
          loading......
        </div>
      </div>
    )
  }
}
