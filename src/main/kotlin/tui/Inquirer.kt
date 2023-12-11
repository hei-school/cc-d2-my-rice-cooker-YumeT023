package tui

object Inquirer {
    fun prompt(message: String): String? {
        println("$message > ")
        return readlnOrNull()
    }
}
