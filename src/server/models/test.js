
const db = require('./index');
const { USER_TYPE } = require('../../shared/constants');

const { User, Prescription, Medicine, MedicinePrescription } = db;

module.exports = async () => {
  const drDat = await User.upsert({
    id: 2,
    username: 'tandat ',
    password: 'tandat12',
    name: 'Nguyễn Tấn Đạt',
    email: 'tandatit19@gmail.com',
    avarta: 'https://image.flaticon.com/icons/svg/921/921130.svg',
    type: USER_TYPE.doctor
  });

  const patient1 = await User.upsert({
    id: 3,
    username: 'patient_1',
    password: 'patient_1',
    name: 'patientName',
    address: 'Hồ chí Minh',
    birthday: ' 1997-10-12 ',
    avarta: 'https://image.flaticon.com/icons/svg/145/145859.svg'
  });

  const thuocParadol = await Medicine.upsert({
    id: 1,
    name: 'Paradol',
    image: 'https://www.mims.com/resources/drugs/Indonesia/packshot/Panadol%20Extra6002PPS0.JPG',
    code: 'PARA-12-443'
  });

  const thuocVitaminC = await Medicine.upsert({
    id: 2,
    name: 'Vitamin C',
    image: 'https://www.justvitamins.co.uk/product-images/Fullsize/eb891065-ecaa-4045-9a42-59822d46e91f-1.jpg',
    code: 'VITAC-12-443'
  });

  const donThuoc1 = await Prescription.upsert({
    id: 1,
    diagnose: 'Heart',
    doctor_id: 2,
    patient_id: 3
  });

  const chiTietThuocHeart1 = await MedicinePrescription.upsert({
    id: 1,
    medicine_id: 1,
    prescription_id: 1,
    amount: 15,
    time: [
      {
        'amount': 1,
        'time': '7:00',
        'description': 'Uống ít thôi'
      },
      {
        'amount': 1,
        'time': '18:00',
        'description': 'Ngủ trước khi uống'
      }
    ]
  });
  const chiTietThuocHeart2 = await MedicinePrescription.upsert({
    id: 2,
    medicine_id: 2,
    prescription_id: 1,
    amount: 15,
    time: [
      {
        'amount': 1,
        'time': '7:00',
        'description': 'Uống ít thôi'
      },
      {
        'amount': 1,
        'time': '11:00',
        'description': 'Uống trước khi ăn'
      },
      {
        'amount': 1,
        'time': '18:00',
        'description': 'Ngủ trước khi uống'
      }
    ]
  });

  return {
    doctor: [drDat],
    patient: [patient1],
    thuoc: [thuocParadol, thuocVitaminC],
    donThuoc: [donThuoc1],
    chiTiet: [chiTietThuocHeart1, chiTietThuocHeart2]
  };
};
