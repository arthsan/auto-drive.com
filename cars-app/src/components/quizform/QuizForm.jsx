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
              <label className="label-form" for="question2">Quanto você pretende gastar por mês com manutenção do veículo?</label>
              <input type="text" class="form-control" id="exampleFormControlQuestion2" name="answer2" placeholder="Answer" />
            </div>
            <div className="question-form">
              <label className="label-form"  for="question3">Normalmente quantas pessoas utilizam o carro com você?</label>
              <input type="text" class="form-control" id="exampleFormControlQuestion3" name="answer3" placeholder="Answer" />
            </div>
            <div className="question-form">
              <label className="label-form" for="question4">Faz viagens de carro? Anda em estradas de terra?</label>
              <input type="text" class="form-control" id="exampleFormControlQuestion4" name="answer4" placeholder="Answer" />
            </div>
            <div className="question-form">
              <label className="label-form"  for="question5">Qual finalidade do veículo? Esportivo/off-road/deslocamento p/ trabalho?</label>
              <input type="text" class="form-control" id="exampleFormControlQuestion5" name="answer5" placeholder="Answer" />
            </div>
            <div className="question-form">
              <label className="label-form"  for="question6"></label>
              <input type="text" class="form-control" id="exampleFormControlQuestion6" name="answer6" placeholder="Answer" />
            </div>
            <div className="question-form">
              <label className="label-form"  for="question7">Question7</label>
              <input type="text" class="form-control" id="exampleFormControlQuestion7" name="answer7" placeholder="Answer" />
            </div>
            <div className="question-form">
              <label className="label-form"  for="question8">Question8</label>
              <input type="text" class="form-control" id="exampleFormControlQuestion8" name="answer8" placeholder="Answer" />
            </div>
            <div className="question-form">
              <label className="label-form"  for="question9">Question9</label>
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