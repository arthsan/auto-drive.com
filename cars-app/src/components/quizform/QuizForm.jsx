import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import service from '../../api/service';

import './quizform.css'


class QuizForm extends Component {
  constructor(props){
    super(props);
    this.state = { 
      // affinity: 0,
      q1: '',
      q2: '',
      q3: '',
      q4: '',
      q5: '',
      q6: '',
      q7: '',
      q8: '',
      q9: '', 
      redirect: false,
    }
  }
  
  handleChange = e => {  
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = e => {
    e.preventDefault();
    service.saveNewQuiz(this.state)
    .then(res => {
        console.log('added: ', res);
        this.setState({
          redirect: !this.state.redirect,
        })
        // here you would redirect to some other page 
    })
    .catch(err => {
        console.log("Error while adding the thing: ", err);
    });
  }  

  render() {
    if(this.state.redirect) {
      return(
        <Redirect to='/' />
      )
    }
    return (
      <div>
        <h2 className="title-form">Simulation</h2>
        <form onSubmit={e => this.handleSubmit(e)}>
          {/* QUESTION 1  */}
          <div className="form-group container-form">
            <div className="question-form">
              <h5>Qual o valor/quantia disponível para compra?</h5>
              <section> 
                <b>R$ 0</b> 
                <input id="range-slider-demo" type="text" class="span2"
                  data-slider-min="50" data-slider-max="10000" data-slider-step="500" 
                  data-slider-value="[1500,5000]"
                  value={ this.state.q1 }
                  onChange={ e => this.handleChange(e)}/>
                <b>R$ 200.000</b>
              </section>
            </div>
          </div>
          {/* QUESTION 2 */}
          <section className="form-group container-form">
            <div className="question-form">
              <h5>Tem preferência por carro novo?</h5>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions1" id="inlineRadio1" 
                  value={ this.state.q2 }
                  onChange={ e => this.handleChange(e)}/>
                <label class="form-check-label" for="inlineRadio1">Yes</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions2" id="inlineRadio2" 
                  value={ this.state.q2 }
                  onChange={ e => this.handleChange(e)}/>
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
            <div class="question-form">
              <h5>Qual finalidade do veículo?</h5>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions3" id="inlineRadio3" 
                  value={ this.state.q4 }
                  onChange={ e => this.handleChange(e)}/>
                <label class="form-check-label" for="inlineRadio3">Trabalho</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions4" id="inlineRadio4" 
                  value={ this.state.q4 }
                  onChange={ e => this.handleChange(e)}/>
                <label class="form-check-label" for="inlineRadio4">Lazer</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions5" id="inlineRadio5" 
                  value={ this.state.q4 }
                  onChange={ e => this.handleChange(e)}/>
                <label class="form-check-label" for="inlineRadio5">Segurança</label>
              </div>
            </div>
          </div>
          {/* QUESTION 5  */}
          <section className="form-group container-form">
            <div className="question-form">
              <h5>Faz viagens de carro ?</h5>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions6" id="inlineRadio6" 
                value={ this.state.q5 }
                onChange={ e => this.handleChange(e)}/>
                <label class="form-check-label" for="inlineRadio6">Yes</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions7" id="inlineRadio7" 
                value={ this.state.q5 }
                onChange={ e => this.handleChange(e)}/>
                <label class="form-check-label" for="inlineRadio7">No</label>
              </div>
            </div>
          </section>
          {/* QUESTION 6  */}
          <section className="form-group container-form">
            <div className="question-form">
              <h5>Você mora perto do trabalho?</h5>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions8" id="inlineRadio8" 
                value={ this.state.q6 }
                onChange={ e => this.handleChange(e)}/>
                <label class="form-check-label" for="inlineRadio8">Yes</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions9" id="inlineRadio9" 
                value={ this.state.q6 }
                onChange={ e => this.handleChange(e)}/>
                <label class="form-check-label" for="inlineRadio9">No</label>
              </div>
            </div>
          </section>
          {/* QUESTION 7  */}
          <section className="form-group container-form">
            <div className="question-form">
              <h5>Você faz viagens regularmente?</h5>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions10" id="inlineRadio10" 
                value={ this.state.q7 }
                onChange={ e => this.handleChange(e)}/>
                <label class="form-check-label" for="inlineRadio10">Yes</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions11" id="inlineRadio11" 
                value={ this.state.q7 }
                onChange={ e => this.handleChange(e)}/>
                <label class="form-check-label" for="inlineRadio11">No</label>
              </div>
            </div>
          </section>
          {/* QUESTION 8  */}
          <section className="form-group container-form">
            <div className="question-form">
              <h5>Anda em estradas de terra?</h5>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions12" id="inlineRadio12" 
                value={ this.state.q8 }
                onChange={ e => this.handleChange(e)}/>
                <label class="form-check-label" for="inlineRadio12">Yes</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions13" id="inlineRadio13" 
                value={ this.state.q8 }
                onChange={ e => this.handleChange(e)}/>
                <label class="form-check-label" for="inlineRadio13">No</label>
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
          <button type="submit" class="btn btn-secondary">Send</button>
        </form>
      </div>
    );
  }
}

export default QuizForm;