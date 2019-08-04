
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
    avatar: 'https://hcplive.s3.amazonaws.com/v1_media/_image/happydoctor.jpg',
    address: 'Hồ Chí Minh',
    specialist: 'Tim mạch',
    type: USER_TYPE.doctor
  });

  const patient1 = await User.upsert({
    id: 3,
    doctor_id: 2,
    patient_code: 'NTN',
    password: '123456',
    name: 'Nguyễn Trần Nam',
    phone: '0987321321',
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
  const thuocDiclofenac = await Medicine.upsert({
    id: 3,
    name: 'Diclofenac',
    image: 'http://www.doctoralerts.com/wp-content/uploads/2016/11/Diclofenac-Therapeutic-uses-Dosage-Side-Effects.jpg',
    code: 'T3'
  });
  const thuocIbuprofen = await Medicine.upsert({
    id: 4,
    name: 'Ibuprofen',
    image: 'https://www.dollargeneral.com/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/0/0/00748101_dghl_ibuprofen_orange_250ct.jpg',
    code: 'T4'
  });

  const thuocMeloxicam = await Medicine.upsert({
    id: 5,
    name: 'Meloxicam',
    image: 'https://www.dollargeneral.com/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/0/0/00748101_dghl_ibuprofen_orange_250ct.jpg',
    code: 'T5'
  });

  const thuocParacetamol = await Medicine.upsert({
    id: 6,
    name: 'Paracetamol',
    image: 'https://www.chemist-4-u.com/media/catalog/product/cache/1/image/450x/9df78eab33525d08d6e5fb8d27136e95/Z/O/ZOLS1BPZPCZ/Numark_Paracetamol_Tablets_500mg_32_Tablets_30.jpg',
    code: 'T6'
  });

  const thuocAllopurinol = await Medicine.upsert({
    id: 7,
    name: 'Allopurinol',
    image: 'https://4.imimg.com/data4/UX/IR/MY-9666337/allopurinol-100mg-500x500.jpg',
    code: 'T7'
  });

  const thuocColchicin = await Medicine.upsert({
    id: 8,
    name: 'Colchicin',
    image: 'https://hotmeal.vn/wp-content/uploads/2019/05/Colchicin.jpg',
    code: 'T8'
  });

  const thuocPrednisolon = await Medicine.upsert({
    id: 9,
    name: 'Prednisolon',
    image: 'https://viemphequan.net/wp-content/uploads/2019/04/thuoc-Prednislone.jpg',
    code: 'T9'
  });

  const thuocDexamethason = await Medicine.upsert({
    id: 10,
    name: 'Dexamethason',
    image: 'https://viemphequan.net/wp-https://img.thuocbietduoc.com.vn/images/drugs/VIDIPHA/DEXAMETHASON.jpg/uploads/2019/04/thuoc-Prednislone.jpg',
    code: 'T10'
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
