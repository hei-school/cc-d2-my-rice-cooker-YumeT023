import core.RiceCooker
import tui.Inquirer
import tui.MenuManager

fun getRiceCooker(): RiceCooker {
    val capacity = Inquirer.prompt("What is the capacity of your rice cooker")
    return RiceCooker(capacity?.toFloatOrNull())
}


fun main(args: Array<String>) {
    val cooker = getRiceCooker()

    var exit = false
    while (!exit) {
        val menu = Inquirer.promptMenu(MenuManager.generateMenu(cooker))
        when (menu) {
            "Plug" -> cooker.isPlugged = true
            "Unplug" -> cooker.isPlugged = false
            "Open lid" -> cooker.isLidOpen = true
            "Close lid" -> cooker.isLidOpen = false
            "Place raw food in the inner pot" -> {
                val riceCup = Inquirer.prompt("cup of rice")
                if (!riceCup.isNullOrEmpty()) {
                    cooker.addRiceCup(riceCup.toFloat())
                }
            }

            "Add water" -> {
                cooker.logRecommendation()
                val waterCup = Inquirer.prompt("water cup")
                if (!waterCup.isNullOrEmpty()) {
                    cooker.addRiceCup(waterCup.toFloat())
                }
            }

            "Begin cooking" -> {
                // cooker.cook()
            }

            "Get the ready-to-serve cook" -> cooker.getCooked()
            "Done" -> {
                println("Exited")
                exit = true
            }
            else -> println("Unknown menu")
        }
    }
}
