import { generateDeploymentConfig } from "scripts";
const config = generateDeploymentConfig("virtual_maths_camp")

config.google_drive = {
  sheets_folder_ids: ["1Iso9GuH6XTDCUFyKToFnjmFNm1Jjt3BB"],
  assets_folder_ids: ["1PFerozfE6i97cMQZNZeo8gA2kHgYlXqI"],
}

config.git = {
  content_repo: "https://github.com/IDEMSInternational/vmc-app-content",
  content_tag_latest: "0.0.2"
}

// Override any app constants here
config.app_config.APP_HEADER_DEFAULTS.title = "Virtual Maths Camp"
config.app_config.APP_SIDEMENU_DEFAULTS.title = "Virtual Maths Camp"

export default config;