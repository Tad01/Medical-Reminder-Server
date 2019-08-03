
const db = require('./index');
const { USER_TYPE } = require('../../shared/constants');

const { User, Prescription, Medicine, MedicinePrescription } = db;


module.exports = async () => {
  const drDat = await User.upsert({
    id: 2,
    password: 'tandat19',
    name: 'Nguyễn Văn Nam',
    email: 'tandatit19@gmail.com',
    birthday: '1982-12-12',
    phone: '0989898989',
    avatar: 'https://image.flaticon.com/icons/svg/921/921130.svg',
    address: 'Hồ Chí Minh',
    specialist: 'Tim mạch',
    type: USER_TYPE.doctor
  });

  const patient1 = await User.upsert({
    id: 3,
    doctor_id: 2,
    patient_code: 'benhnhan01',
    password: '123456',
    name: 'Nguyễn Trần Nam',
    diagnose: 'Tim mạch',
    email: 'tandatit19@gmail.com',
    address: 'Hồ chí Minh',
    birthday: ' 1953-10-12 ',
    avatar: 'http://media.vietq.vn/files/Joelewis.jpg'
  });
  const patient2 = await User.upsert({
    id: 7,
    doctor_id: 2,
    password: '123456',
    name: 'Nguyễn Trần Nam',
    diagnose: 'Tim mạch',
    email: 'tandatit19@gmail.com',
    address: 'Hồ chí Minh',
    birthday: ' 1953-10-12 ',
    avatar: 'http://media.vietq.vn/files/Joelewis.jpg'
  });
  const patient3 = await User.upsert({
    id: 8,
    doctor_id: 2,
    password: '123456',
    name: 'Nguyễn Trần Nam',
    diagnose: 'Tim mạch',
    email: 'tandatit19@gmail.com',
    address: 'Hồ chí Minh',
    birthday: ' 1953-10-12 ',
    avatar: 'http://media.vietq.vn/files/Joelewis.jpg'
  });
  const patient4 = await User.upsert({
    id: 9,
    doctor_id: 2,
    password: '123456',
    name: 'Nguyễn Trần Nam',
    diagnose: 'Tim mạch',
    email: 'tandatit19@gmail.com',
    address: 'Hồ chí Minh',
    birthday: ' 1953-10-12 ',
    avatar: 'http://media.vietq.vn/files/Joelewis.jpg'
  });
  const patient5 = await User.upsert({
    id: 10,
    doctor_id: 2,
    password: '123456',
    name: 'Nguyễn Trần Nam',
    diagnose: 'Tim mạch',
    email: 'tandatit19@gmail.com',
    address: 'Hồ chí Minh',
    birthday: ' 1953-10-12 ',
    avatar: 'http://media.vietq.vn/files/Joelewis.jpg'
  });
  const patient6 = await User.upsert({
    id: 11,
    doctor_id: 2,
    password: '123456',
    name: 'Nguyễn Trần Nam',
    diagnose: 'Tim mạch',
    email: 'tandatit19@gmail.com',
    address: 'Hồ chí Minh',
    birthday: ' 1953-10-12 ',
    avatar: 'http://media.vietq.vn/files/Joelewis.jpg'
  });
  const patient7 = await User.upsert({
    id: 12,
    doctor_id: 2,
    password: '123456',
    name: 'Nguyễn Trần Nam',
    diagnose: 'Tim mạch',
    email: 'tandatit19@gmail.com',
    address: 'Hồ chí Minh',
    birthday: ' 1953-10-12 ',
    avatar: 'http://media.vietq.vn/files/Joelewis.jpg'
  });
  const thuocParadol = await Medicine.upsert({
    id: 1,
    name: 'Paradol',
    image: 'https://www.mims.com/resources/drugs/Indonesia/packshot/Panadol%20Extra6002PPS0.JPG',
    code: 'T1'
  });

  const thuocVitaminC = await Medicine.upsert({
    id: 2,
    name: 'Vitamin C',
    image: 'https://www.justvitamins.co.uk/product-images/Fullsize/eb891065-ecaa-4045-9a42-59822d46e91f-1.jpg',
    code: 'T2'
  });

  const donThuoc1 = await Prescription.upsert({
    id: 1,
    diagnose: 'Heart',
    doctor_id: 2,
    patient_id: 3
  });

  const chiTietThuocHeart1 = await MedicinePrescription.upsert({
    id: 1,
    medicine_id: thuocParadol.id,
    prescription_id: donThuoc1.id,
    amount: 15,
    time: [2, 4, 1]
  });
  const chiTietThuocHeart2 = await MedicinePrescription.upsert({
    id: 2,
    medicine_id: thuocVitaminC.id,
    prescription_id: donThuoc1.id,
    amount: 15,
    time: [1, 2, 1]
  });

  return {
    doctor: [drDat],
    patient: [patient1],
    thuoc: [thuocParadol, thuocVitaminC],
    donThuoc: [donThuoc1],
    chiTiet: [chiTietThuocHeart1, chiTietThuocHeart2]
  };
};
