import { generateDeploymentConfig } from "scripts";
const config = generateDeploymentConfig("virtual_maths_camp")

config.google_drive = {
  sheets_folders: [
    { id: "1Iso9GuH6XTDCUFyKToFnjmFNm1Jjt3BB", name: "Virtual Maths Camp" },
  ],
  assets_folders: [
    { id: "1PFerozfE6i97cMQZNZeo8gA2kHgYlXqI", name: "Virtual Maths Camp" },
  ]
}

config.git = {
  content_repo: "https://github.com/IDEMSInternational/vmc-app-content",
  content_tag_latest: "0.1.2"
}

config.api.db_name = "vmc"

// Override any app constants here
config.app_config.APP_HEADER_DEFAULTS.title = "Virtual Maths Camp"
config.app_config.APP_SIDEMENU_DEFAULTS.title = "Virtual Maths Camp"
config.app_config.APP_THEMES.available = ["professional"]
config.app_config.APP_THEMES.defaultThemeName = "professional"

export default config;
