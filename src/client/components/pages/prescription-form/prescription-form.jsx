/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import update from 'react-addons-update';
import superagent from 'superagent';
import './prescription-form.scss';

export default class extends Component {
  constructor(props) {
    super(props);
    this.patientId = props.match.params.patientId;
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addMoreMedicine = this.addMoreMedicine.bind(this);
    this.removeMedicine = this.removeMedicine.bind(this);
    this.endPoint = '/api/medicines';

    this.state = {
      diagnose: '',
      medicines: [
        { id: 0, code: 'T1', amount: 30, time1: 1, time2: 1, time3: 2 }
      ],  // MED123 x 4 / 7:00
      description: ''
    };
  }

  componentDidMount() {
    document.title = 'Đơn thuốc';
  }

  handleInputChange(event) {
    const isRadioValue = event.target.value === 'true' || event.target.value === 'false';
    const radioValue = event.target.value === 'true';
    const [name, value, index] = [event.target.name, event.target.value, +event.target.dataset.index];

    if (name.startsWith('medicine')) {
      const subProp = name.split('.')[1];
      this.setState(state => ({
        medicines: update(state.medicines, { [index]: { [subProp]: { $set: value } } })
      }));
      return;
    }
    this.setState({
      [name]: isRadioValue ? radioValue : value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    window.toggleBlocking();
    superagent.post(`${this.endPoint}/${this.patientId}`)
      .send(JSON.parse(JSON.stringify(this.state)))
      .then(res => {
        window.toggleBlocking();
        this.onCreateResult(res);
      });
  }

  // eslint-disable-next-line class-methods-use-this
  onCreateResult(res) {
    if (res.body && res.body.prescription) {
      console.log(res);
      alert('Success');
    }
  }

  addMoreMedicine() {
    this.state.medicines.push({
      id: new Date().getTime(),
      code: '',
      amount: 0,
      time1: 0,
      time2: 0,
      time3: 0
    });
    this.setState(state => ({
      medicines: state.medicines
    }));
  }

  removeMedicine(event) {
    const { index } = event.target.dataset;
    if (index >= 0) {
      this.state.medicines.splice(index, 1);
      this.setState(state => ({
        medicines: state.medicines
      }));
    }
  }

  render() {
    return (
      <React.Fragment>
        <form className="pres-form" onSubmit={this.handleSubmit}>
          <h4>THÊM ĐƠN THUỐC</h4>
          <table className="tb-medicine">
            <tbody>
              <tr>
                <td>
                  <label htmlFor="colFormLabelSm" className="col-form-label  col-form-label-sm">Chẩn đoán:  </label>
                </td>
                <td>
                  <div>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="colFormLabelSm"
                      placeholder="tên chẩn đoán..."
                      name="diagnose"
                      value={this.state.diagnose}
                      onChange={this.handleInputChange}
                    />
                  </div>
                </td>
                <td />
              </tr>
              <tr>
                <td>
                  <label htmlFor="colFormLabelSm" className="col-form-label  col-form-label-sm">Thuốc: </label>
                </td>
                <td>
                  {this.state.medicines.map((med, index) => (
                    <div className="row mx-0" key={med.id}>
                      <div className="col px-0 mr-1">
                        <select>
                          <option
                            type="text"
                            className="form-control form-control-sm"
                            placeholder="Mã thuốc"
                            name="medicine.code"
                            data-index={index}
                            value={med.code}
                            onChange={this.handleInputChange}
                          >
                          </option>
                        </select>
                      </div>
                      <div className="col px-0 mr-1">
                        <input
                          type="number"
                          min="0"
                          step="1"
                          className="form-control form-control-sm"
                          placeholder="Số lượng"
                          name="medicine.amount"
                          data-index={index}
                          value={med.amount}
                          onChange={this.handleInputChange}
                        />
                      </div>
                      <div className="col px-0 mr-1">
                        <input
                          type="number"
                          min="0"
                          step="1"
                          className="form-control form-control-sm"
                          placeholder="Sáng"
                          name="medicine.time1"
                          data-index={index}
                          value={med.time1}
                          onChange={this.handleInputChange}
                        />
                      </div>
                      <div className="col px-0 mr-1">
                        <input
                          type="number"
                          min="0"
                          step="1"
                          className="form-control form-control-sm"
                          placeholder="Trưa"
                          name="medicine.time2"
                          data-index={index}
                          value={med.time2}
                          onChange={this.handleInputChange}
                        />
                      </div>
                      <div className="col px-0 mr-1">
                        <input
                          type="number"
                          min="0"
                          step="1"
                          className="form-control form-control-sm"
                          placeholder="Tối"
                          name="medicine.time3"
                          data-index={index}
                          value={med.time3}
                          onChange={this.handleInputChange}
                        />
                      </div>
                      <div className="col px-0 col-fill">
                        <button
                          type="button"
                          className="btn btn-sm btn-danger py-1 mx-0 mt-1"
                          data-index={index}
                          onClick={this.removeMedicine}
                        >Xóa
                        </button>
                      </div>
                    </div>
                  ))}
                  <div className="row mx-0 justify-content-end">
                    <button
                      type="button"
                      className="btn btn-default btn-sm"
                      onClick={this.addMoreMedicine}
                    >Thêm thuốc
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td />
                <td>
                  <div>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="colFormLabelSm"
                      placeholder="Ghi chú..."
                      name="description"
                      onChange={this.handleInputChange}
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <button className="btn btn-primary btnpres" type="submit">Thêm đơn thuốc</button>
        </form>

      </React.Fragment>
    );
  }
}
