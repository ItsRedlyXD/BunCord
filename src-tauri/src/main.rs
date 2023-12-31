#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

#[tauri::command]
fn login(username: &str, password: &str) {
     
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}