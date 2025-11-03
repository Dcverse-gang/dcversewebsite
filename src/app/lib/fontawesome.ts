import { config, library } from '@fortawesome/fontawesome-svg-core'
import { 
  faRobot, faUser, faQuestionCircle, faCompass, faUserAstronaut, 
  faScroll, faImages, faFilm, faRocket, faStar, faInfoCircle, 
  faSlidersH, faRandom, faArrowRight, faFileUpload, faFolderOpen, 
  faMagic, faCheck, faPlus, faFileAlt, faBolt, faRunning, 
  faDragon, faCoins
} from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faDiscord, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons'

// Add all icons to the library
library.add(
  faRobot, faUser, faQuestionCircle, faCompass, faUserAstronaut,
  faScroll, faImages, faFilm, faRocket, faStar, faInfoCircle,
  faSlidersH, faRandom, faArrowRight, faFileUpload, faFolderOpen,
  faMagic, faCheck, faPlus, faFileAlt, faBolt, faRunning,
  faDragon, faCoins, faTwitter, faDiscord, faGithub, faYoutube
)

// Configure Font Awesome
config.autoAddCss = false