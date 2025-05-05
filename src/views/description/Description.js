import React from 'react'
import { cilMoodBad, cilMoodGood, cilMoodVeryBad, cilMoodVeryGood } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { Link, useNavigate } from 'react-router-dom'
import avatar1 from 'src/assets/images/avatars/lazer.png'
import avatar2 from 'src/assets/images/avatars/kirpik.jpeg'
import avatar3 from 'src/assets/images/avatars/zayıflama.jpeg'
import avatar4 from 'src/assets/images/avatars/medikal.jpeg'
import avatar5 from 'src/assets/images/avatars/strom.jpg'
import avatar6 from 'src/assets/images/avatars/çatlak.jpeg'
import avatar7 from 'src/assets/images/avatars/yüz.jpeg'
import avatar8 from 'src/assets/images/avatars/yosun.jpeg'
import avatar9 from 'src/assets/images/avatars/manikür.jpeg'
import avatar10 from 'src/assets/images/avatars/oje.jpeg'
import avatar11 from 'src/assets/images/avatars/tırnak.jpeg'
import avatar12 from 'src/assets/images/avatars/makyaj.jpeg'

import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CCardImage,
  CCardTitle,
  CCardText,
  CRow,
} from '@coreui/react'

const Description = () => {
  const navigate = useNavigate()
  return (
    <CRow>
      <CCol lg={3}>
        <CCard style={{ width: '18rem' }}>
          <CCardImage orientation="top" src={avatar1} alt="lazer" />
          <CCardBody>
            <CCardTitle>Lazer</CCardTitle>
            <CCardText>
              Leda Diode epilasyonda scanner (tarama) atış teknolojisi ile tene temas etmeden jelsiz
              ve konforlu bir epilasyon deneyimi sunar.
            </CCardText>
            <div>
              <button
                className="btn btn-primary"
                onClick={() => {
                  navigate('/appointment/takeappointment')
                }}
              >
                Randevu Al
              </button>
            </div>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol lg={3}>
        <CCard style={{ width: '18rem' }}>
          <CCardImage src={avatar2} alt="kirpik" />
          <CCardBody>
            <CCardTitle>Kirpik Lifting</CCardTitle>
            <CCardText>
              Kirpik lifting, kirpiklerin belirli bir süre boyunca daha uzun ve hacimli görünmesini
              sağlayan bir güzellik uygulamasıdır.
            </CCardText>
            <div>
              <button
                className="btn btn-primary"
                onClick={() => {
                  navigate('/appointment/takeappointment')
                }}
              >
                Randevu Al
              </button>
            </div>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol lg={3}>
        <CCard style={{ width: '18rem' }}>
          <CCardImage orientation="top" src={avatar3} alt="zayıflama" />
          <CCardBody>
            <CCardTitle>Bölgesel Zayıflama</CCardTitle>
            <CCardText>
              Vücutta birikmiş olan kiloların ve toplanıp birikmiş olan yağ kütlelerinin olduğu
              bölgelerin cihazlarla uygulanan zayıflama metodudur. Genellikle kol, bacak, basen,
              göbek gibi bölgelerde yoğun oluştuğu için bu bölgelere daha çok uygulanır.
            </CCardText>
            <div>
              <button
                className="btn btn-primary"
                onClick={() => {
                  navigate('/appointment/takeappointment')
                }}
              >
                Randevu Al
              </button>
            </div>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol lg={3}>
        <CCard style={{ width: '18rem' }}>
          <CCardImage orientation="top" src={avatar4} alt="medikal" />
          <CCardBody>
            <CCardTitle>Medikal Cilt Bakımı</CCardTitle>
            <CCardText>
              Cilt bakımının amacı, gözenekleri temizlemek, cildi cansız gösteren ölü tabakayı
              gidermek, cilde oksijen sağlamak, lenf drenajı ile toksinleri yok etmek, cilde
              parlaklık, canlılık ve tazelik vermektir.
            </CCardText>
            <div>
              <button
                className="btn btn-primary"
                onClick={() => {
                  navigate('/appointment/takeappointment')
                }}
              >
                Randevu Al
              </button>
            </div>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol lg={3}>
        <CCard style={{ width: '18rem' }}>
          <CCardImage orientation="top" src={avatar5} alt="strom" />
          <CCardBody>
            <CCardTitle>Strom EMRF & Radyofrekans</CCardTitle>
            <CCardText>
              Radyofrekans uygulandığında deri katmanlarında ısı oluşur. Derideki kollajen lifler
              ısı etkisi ile kasılır, yara iyileşmesi ve dolayısıyla kollajen liflerde yenilenme
              başlatılır. Cilt sıkılaşması ve gerginliğinde artış olur ve cilt yüzeyi düzgünleşir.
              Aynı zamanda bağ dokusunda kan akışı ve dolaşımda düzelme sonucu cilt yenilenir ve
              sıkılaşır.
            </CCardText>
            <div>
              <button
                className="btn btn-primary"
                onClick={() => {
                  navigate('/appointment/takeappointment')
                }}
              >
                Randevu Al
              </button>
            </div>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol lg={3}>
        <CCard style={{ width: '18rem' }}>
          <CCardImage orientation="top" src={avatar6} alt="çatlak" />
          <CCardBody>
            <CCardTitle>Çatlak Tedavileri Plasma Gold</CCardTitle>
            <CCardText>
              Çatlak Tedavileri Plasma Gold,çatlak tedavisinin en etkili yöntemlerinden biri. Bu
              tedavide, ısının etkisinden yararlanarak kolajenler kısaltılır ve kolajen sıkılaşması
              sağlanır. Kolajen ve elastik liflerinin üretimi ile birlikte deri kendi kendini
              yeniler. Böylece vücuttaki çatlak görünümü azalır.
            </CCardText>
            <div>
              <button
                className="btn btn-primary"
                onClick={() => {
                  navigate('/appointment/takeappointment')
                }}
              >
                Randevu Al
              </button>
            </div>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol lg={3}>
        <CCard style={{ width: '18rem' }}>
          <CCardImage orientation="top" src={avatar7} alt="yüz" />
          <CCardBody>
            <CCardTitle>Ameliyatsız Yüz Gerdirme</CCardTitle>
            <CCardText>
              Ameliyat yapılmadan yüz germe operasyonu, özellikle yaşlanan yüzlerdeki
              kırışıklıkların giderilmesi için tercih edilen bir estetik operasyonudur. Ameliyatsız
              yüz germe yapılırken yüz için uygun olan yöntem, uzman tarafından belirlenerek
              uygulanmaktadır. Ameliyatsız yüz germe operasyonları birbirinden farklı yöntemlerle
              ayrılsa da, uygulanan beş-altı ana yöntem bulunmaktadır:
            </CCardText>
            <div>
              <button
                className="btn btn-primary"
                onClick={() => {
                  navigate('/appointment/takeappointment')
                }}
              >
                Randevu Al
              </button>
            </div>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol lg={3}>
        <CCard style={{ width: '18rem' }}>
          <CCardImage orientation="top" src={avatar8} alt="yosun" />
          <CCardBody>
            <CCardTitle>Yosun Peeling</CCardTitle>
            <CCardText>
              İçerisinde gerçek mineralli alg yosunlar yer almaktadır. Derin bir işlem olması nedeni
              ile kontrollü bir şekilde gerçekleştirilmesi gerekmektedir. Cilt yüzeyinde yer alan
              leke, gözenek, çukur ve akne gibi problemlerin çözümünde büyük bir öneme sahiptir.
              Akneye neden ya da etkileri de derinlemesine baskılamaktadır.
            </CCardText>
            <div>
              <button
                className="btn btn-primary"
                onClick={() => {
                  navigate('/appointment/takeappointment')
                }}
              >
                Randevu Al
              </button>
            </div>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol lg={3}>
        <CCard style={{ width: '18rem' }}>
          <CCardImage orientation="top" src={avatar9} alt="manikür" />
          <CCardBody>
            <CCardTitle>Manikür & Pedikür</CCardTitle>
            <CCardText>
              Manikür ve Pedikür Ürünleri Manikür ellerin güzel görünmesini sağlayan, çeşitli araç
              ve gereçlerle tırnak etlerinin ileri doğru ittirilmesine ya da tamamen alınmasına
              yardımcı olan kişisel bir bakım türüdür.
            </CCardText>
            <div>
              <button
                className="btn btn-primary"
                onClick={() => {
                  navigate('/appointment/takeappointment')
                }}
              >
                Randevu Al
              </button>
            </div>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol lg={3}>
        <CCard style={{ width: '18rem' }}>
          <CCardImage orientation="top" src={avatar10} alt="oje" />
          <CCardBody>
            <CCardTitle>Kalıcı Oje</CCardTitle>
            <CCardText>
              Kalıcı oje, diğer oje yöntemlerinden farklıdır, tatile giden ya da özellikle çalışan
              kadınlar için ideal bir yöntemdir. Bu tırnak makyajı kadınların tırnak bakımı için
              güzellik salonunda veya kuaförde geçirdikleri zamanı azaltırken, ojelerin renkleri
              daha uzun süre bozulmadan kalabilir.
            </CCardText>
            <div>
              <button
                className="btn btn-primary"
                onClick={() => {
                  navigate('/appointment/takeappointment')
                }}
              >
                Randevu Al
              </button>
            </div>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol lg={3}>
        <CCard style={{ width: '18rem' }}>
          <CCardImage orientation="top" src={avatar11} alt="tırnak" />
          <CCardBody>
            <CCardTitle>Protez Tırnak</CCardTitle>
            <CCardText>
              Protez tırnak, kişinin kendi tırnağı üstüne uygulanabilen uzun ve hazır tırnaklardır.
              Bu protez tırnaklar, kişinin asıl tırnağının üst kısmına birtakım koruyucu maddeler
              kullanılmasının ardından uygulanmaktadır.
            </CCardText>
            <div>
              <button
                className="btn btn-primary"
                onClick={() => {
                  navigate('/appointment/takeappointment')
                }}
              >
                Randevu Al
              </button>
            </div>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol lg={3}>
        <CCard style={{ width: '18rem' }}>
          <CCardImage orientation="top" src={avatar12} alt="makyaj" />
          <CCardBody>
            <CCardTitle>Kalıcı Makyaj</CCardTitle>
            <CCardText>
              Kalıcı makyaj tekniği, doğal mineral ve renklerin deri altına işlenmesidir. Mikro
              pigment uygulamasında tek kullanımlık iğneler kullanılarak uygulama yapılır. Deri
              altına enjekte edilen renkler tamamen doğal, katkısız ve kokusuz maddelerdir.
            </CCardText>
            <div>
              <button
                className="btn btn-primary"
                onClick={() => {
                  navigate('/appointment/takeappointment')
                }}
              >
                Randevu Al
              </button>
            </div>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Description
