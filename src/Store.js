import {createStore} from 'redux'
import {callGetApi,fetchData} from './services/APIservice'

 function reducer(state = {},action) {
    switch (action.type) {
      // Global Config
      case 'SET_CONFIG' : return { ...state, config : action.data} ; break;
      case 'SET_APP_IS_DOWN' : return {...state, config : { ...state.config,isDown : action.data}} ; break;
      case 'SET_GET_DATA' : return {...state, config : { ...state.config,getData : action.data}} ; break;
      case 'SET_APP_IS_DOWN_MESSAGE' : return {...state, config : { ...state.config,isDownMessage : action.data}} ; break;
      case 'SET_APP_IS_DOWN_MESSAGE_TITLE' : return {...state, config : { ...state.config,isDownTitle : action.data}} ; break;
      case 'SET_UPDATE_NEEDED_MESSAGE' : return {...state, config : { ...state.config,updateNeededMessage : action.data}} ; break;
      case 'SET_FORCE_UPDATE' : return {...state, config : { ...state.config,forceUpdate : action.data}} ; break;
      case 'SET_RH_WEBSITE' : return {...state, config : { ...state.config,websiteRH : action.data}} ; break;
      case 'SET_CONTACT_URL' : return {...state, config : { ...state.config,contactURL : action.data}} ; break;

      case 'SET_SERVER_URL' : return {...state, config : { ...state.config,server :{ ...state.config.server, url :  action.data}}} ; break;
      case 'SET_SERVER_PORT' : return {...state, config : { ...state.config,server :{ ...state.config.server, port :  action.data}}}
      case 'SET_SERVER_BACKUPURL' : return {...state, config : { ...state.config,server: { ...state.config.server, backupURL :  action.data}}}


      // LoginScren
      case 'SET_LOGINSCREEN_USERNAME_PLACEHOLDER' : return {...state, config : { ...state.config,loginScreen : { ...state.config.loginScreen,ppr_placeholder : action.data}}} ; break;
      case 'SET_LOGINSCREEN_PASS_PLACEHOLDER' : return {...state, config : { ...state.config,loginScreen : { ...state.config.loginScreen,pass_placeholder : action.data}}} ; break;
      case 'SET_LOGINSCREEN_BTNLABEL' : return {...state, config : { ...state.config,loginScreen : { ...state.config.loginScreen,connBtnLabel : action.data}}} ; break;
      case 'SET_LOGINSCREEN_BTNCOLOR' : return {...state, config : { ...state.config,loginScreen : { ...state.config.loginScreen,connBtnColor : action.data}}} ; break;
      case 'SET_LOGINSCREEN_ERROR_TITLE' : return {...state, config : { ...state.config,loginScreen : { ...state.config.loginScreen,IDError :{...state.config.loginScreen.IDError,title : action.data}}}} ; break;
      case 'SET_LOGINSCREEN_ERROR_BODY' : return {...state, config : { ...state.config,loginScreen : { ...state.config.loginScreen,IDError :{...state.config.loginScreen.IDError,body : action.data}}}} ; break;
      case 'SET_LOGINSCREEN_ERROR_BUTTON' : return {...state, config : { ...state.config,loginScreen : { ...state.config.loginScreen,IDError :{...state.config.loginScreen.IDError,btn : action.data}}}} ; break;

      // LoginScren
      case 'SET_NOTCONNECTED_MSG1' : return {...state, config : { ...state.config,notConnected : { ...state.config.notConnected,msg1 : action.data}}} ; break;
      case 'SET_NOTCONNECTED_MSG2' : return {...state, config : { ...state.config,notConnected : { ...state.config.notConnected,msg2 : action.data}}} ; break;
      case 'SET_NOTCONNECTED_BTNCOLOR' : return {...state, config : { ...state.config,notConnected : { ...state.config.notConnected,btnColor : action.data}}} ; break;
      case 'SET_NOTCONNECTED_BTNLABEL' : return {...state, config : { ...state.config,notConnected : { ...state.config.notConnected,btn : action.data}}} ; break;

      // DrawerConfig
      case 'SET_DRAWER_APP_TITLE' : return {...state, config : { ...state.config,content : { ...state.config.content,drawer : { ...state.config.content.drawer, appTitle : action.data}}}} ; break;
      case 'SET_DRAWER_HOME_LABEL' : return {...state, config : { ...state.config,content : { ...state.config.content,drawer : { ...state.config.content.drawer, home : action.data}}}} ; break;
      case 'SET_DRAWER_SITUATION_LABEL' : return {...state, config : { ...state.config,content : { ...state.config.content,drawer : { ...state.config.content.drawer, situation : action.data}}}} ; break;
      case 'SET_DRAWER_FINANCE_LABEL' : return {...state, config : { ...state.config,content : { ...state.config.content,drawer : { ...state.config.content.drawer, salaire : action.data}}}} ; break;
      case 'SET_DRAWER_FAMILLY_LABEL' : return {...state, config : { ...state.config,content : { ...state.config.content,drawer : { ...state.config.content.drawer, famille : action.data}}}} ; break;
      case 'SET_DRAWER_ACTES_LABEL' : return {...state, config : { ...state.config,content : { ...state.config.content,drawer : { ...state.config.content.drawer, actes : action.data}}}} ; break;
      case 'SET_DRAWER_APP_VERSION' : return {...state, config : { ...state.config,content : { ...state.config.content,drawer : { ...state.config.content.drawer, appVersion : action.data}}}} ; break;
      case 'SET_DRAWER_RATING_LABEL' : return {...state, config : { ...state.config,content : { ...state.config.content,drawer : { ...state.config.content.drawer, rateApp : action.data}}}} ; break;
      case 'SET_DRAWER_CONTACT_LABEL' : return {...state, config : { ...state.config,content : { ...state.config.content,drawer : { ...state.config.content.drawer, contact : action.data}}}} ; break;

      // SET_TEASER
      case 'SET_TEASER_TITLE_ADMIN' : return {...state, config : { ...state.config,content : { ...state.config.content,HomeScreen : { ...state.config.content.HomeScreen, AdminTeaser : { ...state.config.content.HomeScreen.AdminTeaser, title :  action.data}}}}} ; break;
      case 'SET_TEASER_BODY_ADMIN' : return {...state, config : { ...state.config,content : { ...state.config.content,HomeScreen : { ...state.config.content.HomeScreen, AdminTeaser : { ...state.config.content.HomeScreen.AdminTeaser, body :  action.data}}}}} ; break;
      case 'SET_TEASER_BTNLABEL_ADMIN' : return {...state, config : { ...state.config,content : { ...state.config.content,HomeScreen : { ...state.config.content.HomeScreen, AdminTeaser : { ...state.config.content.HomeScreen.AdminTeaser, btnLabel :  action.data}}}}} ; break;
      case 'SET_TEASER_BTNCOLOR_ADMIN' : return {...state, config : { ...state.config,content : { ...state.config.content,HomeScreen : { ...state.config.content.HomeScreen, AdminTeaser : { ...state.config.content.HomeScreen.AdminTeaser, btnColor :  action.data}}}}} ; break;

      case 'SET_TEASER_TITLE_FINAN' : return {...state, config : { ...state.config,content : { ...state.config.content,HomeScreen : { ...state.config.content.HomeScreen, FinanTeaser : { ...state.config.content.HomeScreen.FinanTeaser, title :  action.data}}}}} ; break;
      case 'SET_TEASER_BODY_FINAN' : return {...state, config : { ...state.config,content : { ...state.config.content,HomeScreen : { ...state.config.content.HomeScreen, FinanTeaser : { ...state.config.content.HomeScreen.FinanTeaser, body :  action.data}}}}} ; break;
      case 'SET_TEASER_BTNLABEL_FINAN' : return {...state, config : { ...state.config,content : { ...state.config.content,HomeScreen : { ...state.config.content.HomeScreen, FinanTeaser : { ...state.config.content.HomeScreen.FinanTeaser, btnLabel :  action.data}}}}} ; break;
      case 'SET_TEASER_BTNCOLOR_FINAN' : return {...state, config : { ...state.config,content : { ...state.config.content,HomeScreen : { ...state.config.content.HomeScreen, FinanTeaser : { ...state.config.content.HomeScreen.FinanTeaser, btnColor :  action.data}}}}} ; break;

      case 'SET_TEASER_TITLE_FAM' : return {...state, config : { ...state.config,content : { ...state.config.content,HomeScreen : { ...state.config.content.HomeScreen, FamTeaser : { ...state.config.content.HomeScreen.FamTeaser, title :  action.data}}}}} ; break;
      case 'SET_TEASER_BODY_FAM' : return {...state, config : { ...state.config,content : { ...state.config.content,HomeScreen : { ...state.config.content.HomeScreen, FamTeaser : { ...state.config.content.HomeScreen.FamTeaser, body :  action.data}}}}} ; break;
      case 'SET_TEASER_BTNLABEL_FAM' : return {...state, config : { ...state.config,content : { ...state.config.content,HomeScreen : { ...state.config.content.HomeScreen, FamTeaser : { ...state.config.content.HomeScreen.FamTeaser, btnLabel :  action.data}}}}} ; break;
      case 'SET_TEASER_BTNCOLOR_FAM' : return {...state, config : { ...state.config,content : { ...state.config.content,HomeScreen : { ...state.config.content.HomeScreen, FamTeaser : { ...state.config.content.HomeScreen.FamTeaser, btnColor :  action.data}}}}} ; break;

      case 'SET_TEASER_TITLE_ACTES' : return {...state, config : { ...state.config,content : { ...state.config.content,HomeScreen : { ...state.config.content.HomeScreen, ActesTeaser : { ...state.config.content.HomeScreen.ActesTeaser, title :  action.data}}}}} ; break;
      case 'SET_TEASER_BODY_ACTES' : return {...state, config : { ...state.config,content : { ...state.config.content,HomeScreen : { ...state.config.content.HomeScreen, ActesTeaser : { ...state.config.content.HomeScreen.ActesTeaser, body :  action.data}}}}} ; break;
      case 'SET_TEASER_BTNLABEL_ACTES' : return {...state, config : { ...state.config,content : { ...state.config.content,HomeScreen : { ...state.config.content.HomeScreen, ActesTeaser : { ...state.config.content.HomeScreen.ActesTeaser, btnLabel :  action.data}}}}} ; break;
      case 'SET_TEASER_BTNCOLOR_ACTES' : return {...state, config : { ...state.config,content : { ...state.config.content,HomeScreen : { ...state.config.content.HomeScreen, ActesTeaser : { ...state.config.content.HomeScreen.ActesTeaser, btnColor :  action.data}}}}} ; break;

      case 'SET_HOMESCREEN_TITLE' : return {...state, config : { ...state.config,content : { ...state.config.content,HomeScreen : { ...state.config.content.HomeScreen,  title :  action.data}}}} ; break;
      case 'SET_TEASER_TITLE_RESUME' : return {...state, config : { ...state.config,content : { ...state.config.content,HomeScreen : { ...state.config.content.HomeScreen, ResumeTeaser : { ...state.config.content.HomeScreen.ResumeTeaser, title :  action.data}}}}} ; break;
      case 'SET_TEASER_FOOTER_RESUME' : return {...state, config : { ...state.config,content : { ...state.config.content,HomeScreen : { ...state.config.content.HomeScreen, ResumeTeaser : { ...state.config.content.HomeScreen.ResumeTeaser, footer :  action.data}}}}} ; break;

      case 'SET_DETAILS_SCREEN_TITLE_ADMIN' : return {...state, config : { ...state.config,content : { ...state.config.content,AdminScreen : { ...state.config.content.AdminScreen, title : action.data }}}} ; break;
      case 'SET_DETAILS_SCREEN_HEADER_COLOR_ADMIN' : return {...state, config : { ...state.config,content : { ...state.config.content,AdminScreen : { ...state.config.content.AdminScreen, headerColor :  action.data }}}} ; break;
      case 'SET_DETAILS_SCREEN_FIRST_HEADER_ADMIN' : return {...state, config : { ...state.config,content : { ...state.config.content,AdminScreen : { ...state.config.content.AdminScreen, header1Title : action.data }}}} ; break;
      case 'SET_DETAILS_SCREEN_SECOND_HEADER_ADMIN' : return {...state, config : { ...state.config,content : { ...state.config.content,AdminScreen : { ...state.config.content.AdminScreen, header2Title : action.data }}}} ; break;

      case 'SET_DETAILS_SCREEN_TITLE_FINAN' : return {...state, config : { ...state.config,content : { ...state.config.content,FinanScreen : { ...state.config.content.FinanScreen, title : action.data }}}} ; break;
      case 'SET_DETAILS_SCREEN_HEADER_COLOR_FINAN' : return {...state, config : { ...state.config,content : { ...state.config.content,FinanScreen : { ...state.config.content.FinanScreen, headerColor :  action.data }}}} ; break;
      case 'SET_DETAILS_SCREEN_FIRST_HEADER_FINAN' : return {...state, config : { ...state.config,content : { ...state.config.content,FinanScreen : { ...state.config.content.FinanScreen, header1Title : action.data }}}} ; break;
      case 'SET_DETAILS_SCREEN_SECOND_HEADER_FINAN' : return {...state, config : { ...state.config,content : { ...state.config.content,FinanScreen : { ...state.config.content.FinanScreen, header2Title : action.data }}}} ; break;

      case 'SET_LIST_SCREEN_TITLE_FAM' : return {...state, config : { ...state.config,content : { ...state.config.content,FamScreen : { ...state.config.content.FamScreen, title : action.data }}}} ; break;
      case 'SET_LIST_SCREEN_HEADER_COLOR_FAM' : return {...state, config : { ...state.config,content : { ...state.config.content,FamScreen : { ...state.config.content.FamScreen, headerColor :  action.data }}}} ; break;

      case 'SET_LIST_SCREEN_TITLE_ACTES' : return {...state, config : { ...state.config,content : { ...state.config.content,ActesScreen : { ...state.config.content.ActesScreen, title : action.data }}}} ; break;
      case 'SET_LIST_SCREEN_HEADER_COLOR_ACTES' : return {...state, config : { ...state.config,content : { ...state.config.content,ActesScreen : { ...state.config.content.ActesScreen, headerColor :  action.data }}}} ; break;

      case 'SET_RATE_TITLE' : return {...state, config : { ...state.config,content : { ...state.config.content,Rate : { ...state.config.content.Rate, title : action.data }}}} ; break;
      case 'SET_RATE_BODY' : return {...state, config : { ...state.config,content : { ...state.config.content,Rate : { ...state.config.content.Rate, body :  action.data }}}} ; break;
      case 'SET_RATE_OKBTN' : return {...state, config : { ...state.config,content : { ...state.config.content,Rate : { ...state.config.content.Rate, OKbtn : action.data }}}} ; break;

      case 'SET_QUIT_TITLE' : return {...state, config : { ...state.config,content : { ...state.config.content,QuitMessage : { ...state.config.content.QuitMessage, title : action.data }}}} ; break;
      case 'SET_QUIT_BODY' : return {...state, config : { ...state.config,content : { ...state.config.content,QuitMessage : { ...state.config.content.QuitMessage, body :  action.data }}}} ; break;
      case 'SET_QUIT_OKBTN' : return {...state, config : { ...state.config,content : { ...state.config.content,QuitMessage : { ...state.config.content.QuitMessage, OKbtn : action.data }}}} ; break;

      //Ads
      case 'SET_ADS_ENABLED' : return {...state, config : { ...state.config,ads : {...state.config.ads, enable : action.data}}} ; break;
      case 'SET_ENABLE_AD1_HOME' : return {...state, config : { ...state.config,ads : {...state.config.ads, HomeScreen : { ...state.config.ads.HomeScreen,ad1 : action.data}}}} ; break;
      case 'SET_ENABLE_AD2_HOME' : return {...state, config : { ...state.config,ads : {...state.config.ads, HomeScreen : { ...state.config.ads.HomeScreen,ad2 : action.data}}}} ; break;
      case 'SET_ADUNITID_AD1_HOME' : return {...state, config : { ...state.config,ads : {...state.config.ads, HomeScreen : { ...state.config.ads.HomeScreen,ad1UnitID : action.data}}}} ; break;
      case 'SET_ADUNITID_AD2_HOME' : return {...state, config : { ...state.config,ads : {...state.config.ads, HomeScreen : { ...state.config.ads.HomeScreen,ad2UnitID : action.data}}}} ; break;
      case 'SET_FORMAT_AD1_HOME' : return {...state, config : { ...state.config,ads : {...state.config.ads, HomeScreen : { ...state.config.ads.HomeScreen,ad1Format : action.data}}}} ; break;
      case 'SET_FORMAT_AD2_HOME' : return {...state, config : { ...state.config,ads : {...state.config.ads, HomeScreen : { ...state.config.ads.HomeScreen,ad2Format : action.data}}}} ; break;

      case 'SET_ENABLE_AD1_ADMIN' : return {...state, config : { ...state.config,ads : {...state.config.ads, AdminScreen : { ...state.config.ads.AdminScreen,ad1 : action.data}}}} ; break;
      case 'SET_ENABLE_AD2_ADMIN' : return {...state, config : { ...state.config,ads : {...state.config.ads, AdminScreen : { ...state.config.ads.AdminScreen,ad2 : action.data}}}} ; break;
      case 'SET_ADUNITID_AD1_ADMIN' : return {...state, config : { ...state.config,ads : {...state.config.ads, AdminScreen : { ...state.config.ads.AdminScreen,ad1UnitID : action.data}}}} ; break;
      case 'SET_ADUNITID_AD2_ADMIN' : return {...state, config : { ...state.config,ads : {...state.config.ads, AdminScreen : { ...state.config.ads.AdminScreen,ad2UnitID : action.data}}}} ; break;
      case 'SET_FORMAT_AD1_ADMIN' : return {...state, config : { ...state.config,ads : {...state.config.ads, AdminScreen : { ...state.config.ads.AdminScreen,ad1Format : action.data}}}} ; break;
      case 'SET_FORMAT_AD2_ADMIN' : return {...state, config : { ...state.config,ads : {...state.config.ads, AdminScreen : { ...state.config.ads.AdminScreen,ad2Format : action.data}}}} ; break;

      case 'SET_ENABLE_AD1_FINAN' : return {...state, config : { ...state.config,ads : {...state.config.ads, FinanScreen : { ...state.config.ads.FinanScreen,ad1 : action.data}}}} ; break;
      case 'SET_ENABLE_AD2_FINAN' : return {...state, config : { ...state.config,ads : {...state.config.ads, FinanScreen : { ...state.config.ads.FinanScreen,ad2 : action.data}}}} ; break;
      case 'SET_ADUNITID_AD1_FINAN' : return {...state, config : { ...state.config,ads : {...state.config.ads, FinanScreen : { ...state.config.ads.FinanScreen,ad1UnitID : action.data}}}} ; break;
      case 'SET_ADUNITID_AD2_FINAN' : return {...state, config : { ...state.config,ads : {...state.config.ads, FinanScreen : { ...state.config.ads.FinanScreen,ad2UnitID : action.data}}}} ; break;
      case 'SET_FORMAT_AD1_FINAN' : return {...state, config : { ...state.config,ads : {...state.config.ads, FinanScreen : { ...state.config.ads.FinanScreen,ad1Format : action.data}}}} ; break;
      case 'SET_FORMAT_AD2_FINAN' : return {...state, config : { ...state.config,ads : {...state.config.ads, FinanScreen : { ...state.config.ads.FinanScreen,ad2Format : action.data}}}} ; break;

      case 'SET_ENABLE_AD1_FAM' : return {...state, config : { ...state.config,ads : {...state.config.ads, FamScreen : { ...state.config.ads.FamScreen,ad1 : action.data}}}} ; break;
      case 'SET_ENABLE_AD2_FAM' : return {...state, config : { ...state.config,ads : {...state.config.ads, FamScreen : { ...state.config.ads.FamScreen,ad2 : action.data}}}} ; break;
      case 'SET_ADUNITID_AD1_FAM' : return {...state, config : { ...state.config,ads : {...state.config.ads, FamScreen : { ...state.config.ads.FamScreen,ad1UnitID : action.data}}}} ; break;
      case 'SET_ADUNITID_AD2_FAM' : return {...state, config : { ...state.config,ads : {...state.config.ads, FamScreen : { ...state.config.ads.FamScreen,ad2UnitID : action.data}}}} ; break;
      case 'SET_FORMAT_AD1_FAM' : return {...state, config : { ...state.config,ads : {...state.config.ads, FamScreen : { ...state.config.ads.FamScreen,ad1Format : action.data}}}} ; break;
      case 'SET_FORMAT_AD2_FAM' : return {...state, config : { ...state.config,ads : {...state.config.ads, FamScreen : { ...state.config.ads.FamScreen,ad2Format : action.data}}}} ; break;

      case 'SET_ENABLE_AD1_ACTES' : return {...state, config : { ...state.config,ads : {...state.config.ads, ActesScreen : { ...state.config.ads.ActesScreen,ad1 : action.data}}}} ; break;
      case 'SET_ENABLE_AD2_ACTES' : return {...state, config : { ...state.config,ads : {...state.config.ads, ActesScreen : { ...state.config.ads.ActesScreen,ad2 : action.data}}}} ; break;
      case 'SET_ADUNITID_AD1_ACTES' : return {...state, config : { ...state.config,ads : {...state.config.ads, ActesScreen : { ...state.config.ads.ActesScreen,ad1UnitID : action.data}}}} ; break;
      case 'SET_ADUNITID_AD2_ACTES' : return {...state, config : { ...state.config,ads : {...state.config.ads, ActesScreen : { ...state.config.ads.ActesScreen,ad2UnitID : action.data}}}} ; break;
      case 'SET_FORMAT_AD1_ACTES' : return {...state, config : { ...state.config,ads : {...state.config.ads, ActesScreen : { ...state.config.ads.ActesScreen,ad1Format : action.data}}}} ; break;
      case 'SET_FORMAT_AD2_ACTES' : return {...state, config : { ...state.config,ads : {...state.config.ads, ActesScreen : { ...state.config.ads.ActesScreen,ad2Format : action.data}}}} ; break;

      case 'SET_USERNAME' : return {...state, username : action.data }
      case 'SET_PASSWORD' : return {...state, password : action.data }
      case 'SET_LOGGED_IN' : return {...state, loggedIn : action.data }





      default: return state;

}
}



export const store = createStore(reducer);
