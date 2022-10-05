import React from 'react'

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CListGroup,
  CListGroupItem
} from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'

import WidgetsBrand from '../widgets/WidgetsBrand'
import WidgetsDropdown from '../widgets/WidgetsDropdown'

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import highchartsMap from 'highcharts/modules/map'
// import proj4 from 'proj4';
import mapDataIE from '@highcharts/map-collection/countries/ng/ng-all.topo.json'
highchartsMap(Highcharts)

// data and map
const data = [
  ['ng-ri', 10],
  ['ng-kt', 11], 
  ['ng-so', 12],
  ['ng-za', 13],
  ['ng-yo', 14], 
  ['ng-ke', 15], 
  ['ng-ad', 16], 
  ['ng-bo', 17],
  ['ng-ak', 18],
  ['ng-ab', 19],
  ['ng-im', 20],
  ['ng-by', 21],
  ['ng-be', 22],
  ['ng-cr', 23],
  ['ng-ta', 24],
  ['ng-kw', 25],
  ['ng-la', 26],
  ['ng-ni', 27],
  ['ng-fc', 28], 
  ['ng-og', 29],
  ['ng-on', 30], 
  ['ng-ek', 31], 
  ['ng-os', 32], 
  ['ng-oy', 33],
  ['ng-an', 34], 
  ['ng-ba', 35], 
  ['ng-go', 36], 
  ['ng-de', 37],
  ['ng-ed', 38], 
  ['ng-en', 39], 
  ['ng-eb', 40], 
  ['ng-kd', 41],
  ['ng-ko', 42], 
  ['ng-pl', 43], 
  ['ng-na', 44], 
  ['ng-ji', 45],
  ['ng-kn', 46]
];

const mapOptions = {
  chart: {
    map: 'countries/ie/ie-all'
  },
  title: {
    text: ''
  },
  credits: {
      enabled: false
  },
  mapNavigation: {
    enabled: true,
    buttonOptions: {
        verticalAlign: 'bottom'
    }
  },
  
  tooltip: {
    headerFormat: '',
    pointFormat: '<b>{point.freq}</b><br><b>{point.keyword}</b>                      <br>lat: {point.lat}, lon: {point.lon}'
  },
  series: [{
    // Use the gb-all map with no data as a basemap
    name: 'Basemap',
    mapData: mapDataIE,
    borderColor: '#A0A0A0',
    nullColor: 'rgba(200, 200, 200, 0.3)',
    showInLegend: false,
    states: {
      hover: {
          color: '#BADA55'
      }
  },
  dataLabels: {
      enabled: true,
      format: '{point.name}'
  }
  }, {
    // Specify points using lat/lon
    type: 'mapbubble',
    name: 'States',
    color: '#4169E1',
    data: data,
    cursor: 'pointer',
    point: {
      events: {
        click: function() {
          console.log(this.keyword);
        }
      }
    }
  }]
}


const Dashboard = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

  const progressExample = [
    { title: 'Visits', value: '29.703 Users', percent: 40, color: 'success' },
    { title: 'Unique', value: '24.093 Users', percent: 20, color: 'info' },
    { title: 'Pageviews', value: '78.706 Views', percent: 60, color: 'warning' },
    { title: 'New Users', value: '22.123 Users', percent: 80, color: 'danger' },
    { title: 'Bounce Rate', value: 'Average Rate', percent: 40.15, color: 'primary' },
  ]

  const progressGroupExample1 = [
    { title: 'Monday', value1: 34, value2: 78 },
    { title: 'Tuesday', value1: 56, value2: 94 },
    { title: 'Wednesday', value1: 12, value2: 67 },
    { title: 'Thursday', value1: 43, value2: 91 },
    { title: 'Friday', value1: 22, value2: 73 },
    { title: 'Saturday', value1: 53, value2: 82 },
    { title: 'Sunday', value1: 9, value2: 69 },
  ]

  const progressGroupExample2 = [
    { title: 'Male', icon: cilUser, value: 53 },
    { title: 'Female', icon: cilUserFemale, value: 43 },
  ]

  const progressGroupExample3 = [
    { title: 'Organic Search', icon: cibGoogle, percent: 56, value: '191,235' },
    { title: 'Facebook', icon: cibFacebook, percent: 15, value: '51,223' },
    { title: 'Twitter', icon: cibTwitter, percent: 11, value: '37,564' },
    { title: 'LinkedIn', icon: cibLinkedin, percent: 8, value: '27,319' },
  ]

  const tableExample = [
    {
      avatar: { src: avatar1, status: 'success' },
      user: {
        name: 'Yiorgos Avraamu',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'USA', flag: cifUs },
      usage: {
        value: 50,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'success',
      },
      payment: { name: 'Mastercard', icon: cibCcMastercard },
      activity: '10 sec ago',
    },
    {
      avatar: { src: avatar2, status: 'danger' },
      user: {
        name: 'Avram Tarasios',
        new: false,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'Brazil', flag: cifBr },
      usage: {
        value: 22,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'info',
      },
      payment: { name: 'Visa', icon: cibCcVisa },
      activity: '5 minutes ago',
    },
    {
      avatar: { src: avatar3, status: 'warning' },
      user: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2021' },
      country: { name: 'India', flag: cifIn },
      usage: {
        value: 74,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'warning',
      },
      payment: { name: 'Stripe', icon: cibCcStripe },
      activity: '1 hour ago',
    },
    {
      avatar: { src: avatar4, status: 'secondary' },
      user: { name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2021' },
      country: { name: 'France', flag: cifFr },
      usage: {
        value: 98,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'danger',
      },
      payment: { name: 'PayPal', icon: cibCcPaypal },
      activity: 'Last month',
    },
    {
      avatar: { src: avatar5, status: 'success' },
      user: {
        name: 'Agapetus Tadeáš',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'Spain', flag: cifEs },
      usage: {
        value: 22,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'primary',
      },
      payment: { name: 'Google Wallet', icon: cibCcApplePay },
      activity: 'Last week',
    },
    {
      avatar: { src: avatar6, status: 'danger' },
      user: {
        name: 'Friderik Dávid',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'Poland', flag: cifPl },
      usage: {
        value: 43,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'success',
      },
      payment: { name: 'Amex', icon: cibCcAmex },
      activity: 'Last week',
    },
  ]

  return (
    <>
      <WidgetsDropdown />
   

      <CRow>
        <CCol xs>
          <CCard className='mb-4'>
            <CCardHeader>States</CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs={12} md={6} xl={6}>
                  <div>
                      <HighchartsReact
                        constructorType ={'mapChart'}
                        highcharts={Highcharts}
                        options={mapOptions}
                      />
                  </div>
                </CCol>

                <CCol xs={12} md={6} xl={6}>

                  <div className='mb-5'></div>

                <CListGroup>
                <CListGroupItem component="a" active>
                  Click an option to view in map
                </CListGroupItem>
                <CListGroupItem component="a" href="#">
                  Survey prediction
                </CListGroupItem>
                <CListGroupItem component="a" href="#">
                  Support group member
                </CListGroupItem>
                <CListGroupItem component="a" href="#">
                  Member distribution
                </CListGroupItem>
                <CListGroupItem component="a" href="#">
                  History
                </CListGroupItem>
              </CListGroup>
                </CCol>
              </CRow>

              <br />

            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
