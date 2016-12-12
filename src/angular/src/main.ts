import 'zone.js/dist/zone'
import 'core-js/es7/reflect' //TODO: this shouldn't be required in AoT mode. regression?
import {platformBrowser} from '@angular/platform-browser'
import {AppModuleNgFactory} from './ngfactory/src/app.ngfactory'
import {enableProdMode} from '@angular/core'
enableProdMode()

platformBrowser()
  .bootstrapModuleFactory(AppModuleNgFactory)
