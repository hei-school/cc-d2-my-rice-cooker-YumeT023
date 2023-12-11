package tui

object Inquirer {
    fun prompt(message: String): String? {
        println("$message > ")
        return readlnOrNull()
    }

    fun promptMenu(menu: List<String>): String {
        if (menu.isNotEmpty()) {
            for (i in 1..menu.size) {
                println("$i - ${menu[i]}")
            }
            println()
            val answer = prompt("Choose")
            if (answer != null) {
                val idx = answer.toInt()
                if (idx > 0 && idx <= menu.size)
                    return menu[idx - 1]
            }
        }
        return ""
    }
}
