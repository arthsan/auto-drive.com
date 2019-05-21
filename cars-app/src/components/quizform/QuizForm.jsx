import React, { Component } from 'react';


import './quizform.css'

class QuizForm extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = { 
  //     x: '',
  //     y: '',
  //     z: false, 
  //   };
  // }

  // handleFormSubmit = (event) => {
  //   event.preventDefault();
  //  const = "";
  //   .then( response => {
  //   })
  //   .catch( error => console.log(error) )
  // }

  render(){
    return (
      <div>
        <h2 className="title-form">Simulation</h2>
        <form>
          {/* QUESTION 1  */}
          <div className="form-group container-form">
            <div className="question-form">
              <h5>Qual o valor/quantia disponível para compra?</h5>
              <section> 
                <b>R$ 0</b> <input id="range-slider-demo" type="text" class="span2" value="" 
                data-slider-min="50" data-slider-max="10000" data-slider-step="500" 
                data-slider-value="[1500,5000]"/> <b>R$ 200.000</b>
              </section>
            </div>
          </div>
          {/* QUESTION 2 */}
          <section className="form-group container-form">
            <div className="question-form">
              <h5>Tem preferência por carro novo?</h5>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                <label class="form-check-label" for="inlineRadio1">Yes</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                <label class="form-check-label" for="inlineRadio2">No</label>
              </div>
            </div>
          </section>
          {/* QUESTION 3 */}
          <div className="form-group container-form">
            <div className="question-form">
              <h5>Quanto você pretende gastar por mês com manutenção do veículo?</h5>
              <section> 
                <b>R$ 0</b> <input id="range-slider-demo" type="text" class="span2" value="" 
                data-slider-min="50" data-slider-max="10000" data-slider-step="500" 
                data-slider-value="[1500,5000]"/> <b>R$ 5.000</b>
              </section>
            </div>
          </div>
          {/* QUESTION 4  */}
          <div className="form-group container-form">
            <div class="btn-group question-form">
              <h5>Qual finalidade do veículo?</h5>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                <label class="form-check-label" for="inlineRadio1">Trabalho</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                <label class="form-check-label" for="inlineRadio2">Lazer</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                <label class="form-check-label" for="inlineRadio2">Segurança</label>
              </div>
            </div>
          </div>
          {/* QUESTION 5  */}
          <section className="form-group container-form">
            <div className="question-form">
              <h5>Faz viagens de carro ?</h5>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                <label class="form-check-label" for="inlineRadio1">Yes</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                <label class="form-check-label" for="inlineRadio2">No</label>
              </div>
            </div>
          </section>
          {/* QUESTION 6  */}
          <section className="form-group container-form">
            <div className="question-form">
              <h5>Você mora perto do trabalho?</h5>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                <label class="form-check-label" for="inlineRadio1">Yes</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                <label class="form-check-label" for="inlineRadio2">No</label>
              </div>
            </div>
          </section>
          {/* QUESTION 7  */}
          <section className="form-group container-form">
            <div className="question-form">
              <h5>Você faz viagens regularmente?</h5>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                <label class="form-check-label" for="inlineRadio1">Yes</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                <label class="form-check-label" for="inlineRadio2">No</label>
              </div>
            </div>
          </section>
          {/* QUESTION 8  */}
          <section className="form-group container-form">
            <div className="question-form">
              <h5>Anda em estradas de terra?</h5>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                <label class="form-check-label" for="inlineRadio1">Yes</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                <label class="form-check-label" for="inlineRadio2">No</label>
              </div>
            </div>
          </section>
          {/* QUESTION 9  */}
          <section className="form-group container-form">
            <div className="question-form">
              <h5>Qual a sua idade?</h5>
              <div> 
                <b>18 anos</b> <input id="range-slider-demo" type="text" class="span2" value="" 
                data-slider-min="50" data-slider-max="10000" data-slider-step="500" 
                data-slider-value="[1500,5000]"/> <b>100 anos</b>
              </div>
            </div>
          </section>
          <button type="button" class="btn btn-secondary">Send</button>
        </form>
      </div>
    );
  }
}

export default QuizForm;