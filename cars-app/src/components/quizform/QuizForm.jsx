import React, { Component } from 'react';


import './quizform.css'

class QuizForm extends Component {
  render(){
    return (
      <div>
        <h2 className="title-form">Simulation</h2>
        <form>
          <div className="form-group container-form">
            <div className="question-form">
              <label className="label-form" for="question1">Qual o valor/quantia disponível para compra?</label>
              <input type="text" class="form-control" id="exampleFormControlQuestion1" name="answer1" placeholder="Answer" />
            </div>
            <div className="question-form">
              <label className="label-form" for="question2">Você faz questão de um carro 0km?</label>
              <input type="text" class="form-control" id="exampleFormControlQuestion2" name="answer2" placeholder="Answer" />
            </div>
            <div className="question-form">
              <label className="label-form"  for="question3">Quanto você pretende gastar por mês com manutenção do veículo?</label>
              <input type="text" class="form-control" id="exampleFormControlQuestion3" name="answer3" placeholder="Answer" />
            </div>
            <div className="question-form">
              <label className="label-form" for="question4">Faz viagens de carro? </label>
              <input type="text" class="form-control" id="exampleFormControlQuestion4" name="answer4" placeholder="Answer" />
            </div>
            <div className="question-form">
              <label className="label-form"  for="question5">Qual finalidade do veículo</label>
              <input type="text" class="form-control" id="exampleFormControlQuestion5" name="answer5" placeholder="Answer" />
            </div>
            <div className="question-form">
              <label className="label-form"  for="question6">Você mora perto do trabalho?</label>
              <input type="text" class="form-control" id="exampleFormControlQuestion6" name="answer6" placeholder="Answer" />
            </div>
            <div className="question-form">
              <label className="label-form"  for="question7">Vai fazer viagens?</label>
              <input type="text" class="form-control" id="exampleFormControlQuestion7" name="answer7" placeholder="Answer" />
            </div>
            <div className="question-form">
              <label className="label-form"  for="question8">Anda em estradas de terra?</label>
              <input type="text" class="form-control" id="exampleFormControlQuestion8" name="answer8" placeholder="Answer" />
            </div>
            <div className="question-form">
              <label className="label-form"  for="question9">Qual a sua idade?</label>
              <input type="text" class="form-control" id="exampleFormControlQuestion9" name="answer9" placeholder="Answer" />
            </div>
            <div className="question-form">
              <label className="label-form" for="question10">Question10</label>
              <input type="text" class="form-control" id="exampleFormControlQuestion10s" name="answer10" placeholder="Answer" />
            </div>
          </div>
          <button type="button" class="btn btn-secondary">Send</button>
        </form>
      </div>
    );
  }
}

export default QuizForm;