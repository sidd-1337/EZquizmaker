export class Questions {
    static getAllQuestions() {
        return [
            // Téma 2: Základní pojmy
            {
                question: 'Jak se v modelování definuje systém?',
                options: ['Soubor pravidel pro simulaci', 'Abstrakce reálného světa', 'Matematický model', 'Počítačový program'],
                answer: 'Abstrakce reálného světa'
            },
            {
                question: 'Co označuje pojem model v modelování?',
                options: ['Fyzický prototyp', 'Matematický popis systému', 'Simulační program', 'Kopie systému v měřítku'],
                answer: 'Matematický popis systému'
            },
            {
                question: 'Jaké jsou klíčové vlastnosti dynamického systému?',
                options: ['Neměnnost v čase', 'Závislost na čase', 'Matematická jednoduchost', 'Základní statické atributy'],
                answer: 'Závislost na čase'
            },
            {
                question: 'Co je hlavním účelem modelování?',
                options: ['Analyzovat složité systémy', 'Nahradit reálný systém', 'Zjednodušit data', 'Zlepšit estetiku systému'],
                answer: 'Analyzovat složité systémy'
            },
            {
                question: 'Co je statický systém?',
                options: ['Systém měnící se v čase', 'Systém ignorující časovou změnu', 'Systém bez atributů', 'Jednoduchý dynamický systém'],
                answer: 'Systém ignorující časovou změnu'
            },
            {
                question: 'Jaké jsou základní komponenty systému?',
                options: ['Prvky, atributy, relace', 'Signály, modely, data', 'Počítače, programy, výstupy', 'Matematika, logika, výpočty'],
                answer: 'Prvky, atributy, relace'
            },

            // Téma 3: Komplexní systémy
            {
                question: 'Co odlišuje komplexní systém od jednoduchého?',
                options: ['Počet prvků', 'Interakce mezi prvky', 'Lineární struktura', 'Fyzická velikost systému'],
                answer: 'Interakce mezi prvky'
            },
            {
                question: 'Jaký je význam zpětné vazby v komplexních systémech?',
                options: ['Způsobuje náhodné změny', 'Reguluje chování systému', 'Odstraňuje prvky systému', 'Ignoruje časové změny'],
                answer: 'Reguluje chování systému'
            },
            {
                question: 'Co je charakteristické pro složité systémy?',
                options: ['Jednoduchá analýza', 'Vysoká předvídatelnost', 'Nelineární interakce', 'Neměnné parametry'],
                answer: 'Nelineární interakce'
            },
            {
                question: 'Jaké jsou příklady komplexních systémů?',
                options: ['Ekosystémy, společenské systémy', 'Mechanické hodinky, roboti', 'Počítačové algoritmy, databáze', 'Automatické systémy, hry'],
                answer: 'Ekosystémy, společenské systémy'
            },
            {
                question: 'Jaký je význam analýzy komplexních systémů?',
                options: ['Zjednodušit matematiku', 'Předpovídat chování systému', 'Zredukovat počet prvků', 'Změnit fyzickou strukturu'],
                answer: 'Předpovídat chování systému'
            },
            {
                question: 'Co znamená emergentní chování v komplexních systémech?',
                options: ['Chování vznikající z interakcí mezi prvky', 'Chování zcela nezávislé na prvcích', 'Předem naprogramované chování', 'Chování bez zpětné vazby'],
                answer: 'Chování vznikající z interakcí mezi prvky'
            },

            // Téma 4: Matematické prostředky pro modelování a simulaci
            {
                question: 'Jaké jsou základní matematické metody používané v modelování?',
                options: ['Statistika, diferenciální rovnice', 'Geometrie, algebra', 'Integrální výpočty, trigonometrie', 'Číselné metody, grafy'],
                answer: 'Statistika, diferenciální rovnice'
            },
            {
                question: 'Co je hlavním cílem matematických modelů?',
                options: ['Popis chování systému', 'Vytvoření fyzického prototypu', 'Simulace estetických vlastností', 'Náhrada výpočetních algoritmů'],
                answer: 'Popis chování systému'
            },
            {
                question: 'Jaké jsou klíčové fáze simulace?',
                options: ['Definice problému, návrh modelu, experimenty', 'Sběr dat, analýza, implementace', 'Vývoj softwaru, testování, optimalizace', 'Matematická analýza, sběr dat, výpočty'],
                answer: 'Definice problému, návrh modelu, experimenty'
            },
            {
                question: 'Jaká je role diferenciálních rovnic v simulaci?',
                options: ['Modelují dynamiku systému', 'Nahrazují fyzické modely', 'Slouží k vizualizaci dat', 'Zajišťují optimalizaci výpočtů'],
                answer: 'Modelují dynamiku systému'
            },
            {
                question: 'Co označuje pojem parametrizace modelu?',
                options: ['Určení hodnot parametrů', 'Zjednodušení modelu', 'Přidání zpětné vazby', 'Vyloučení chybových dat'],
                answer: 'Určení hodnot parametrů'
            },
            {
                question: 'Jaké jsou výhody matematického modelování?',
                options: ['Flexibilita, přesnost, predikce', 'Jednoduchost, rychlost, design', 'Estetická hodnota, vizualizace, robustnost', 'Automatizace, redukce, synchronizace'],
                answer: 'Flexibilita, přesnost, predikce'
            },

            // Téma 5: Organizace simulačního modelu
            {
                question: 'Jaké jsou hlavní úkoly při konstrukci simulačního jádra?',
                options: ['Synchronizace výpočtů, zobrazení času', 'Definování cílů, nastavení výstupů', 'Optimalizace softwaru, testování', 'Rozdělení dat, ukládání výsledků'],
                answer: 'Synchronizace výpočtů, zobrazení času'
            },
            {
                question: 'Co je stavový diagram v simulaci?',
                options: ['Grafické zobrazení stavů systému', 'Matematický popis dynamiky', 'Vizualizace vstupů a výstupů', 'Tabulka parametrů systému'],
                answer: 'Grafické zobrazení stavů systému'
            },
            {
                question: 'Jaká je role vstupních dat v simulaci?',
                options: ['Definují parametry modelu', 'Nahrazují výstupy modelu', 'Slouží k validaci modelu', 'Používají se k ladění algoritmů'],
                answer: 'Definují parametry modelu'
            },
            {
                question: 'Co znamená synchronizace výpočtu v simulaci?',
                options: ['Koordinace časových kroků simulace', 'Zrychlení výpočetních algoritmů', 'Redukce chyb při výpočtech', 'Optimalizace softwarového prostředí'],
                answer: 'Koordinace časových kroků simulace'
            },
            {
                question: 'Jaký je význam výstupů simulačních programů?',
                options: ['Poskytují data pro analýzu', 'Slouží k validaci modelu', 'Nahradí fyzické prototypy', 'Zlepšují přesnost simulace'],
                answer: 'Poskytují data pro analýzu'
            },
            {
                question: 'Co je to zobrazení stavových změn?',
                options: ['Vizualizace změn v systému', 'Popis matematických vzorců', 'Srovnání dvou modelů', 'Záznam změn parametrů'],
                answer: 'Vizualizace změn v systému'
            },

            // Téma 6: Základy teorie diskrétních dynamických systémů
            {
                question: 'Co je diskrétní dynamický systém?',
                options: ['Systém měnící se v diskrétních časových krocích', 'Systém bez časového vývoje', 'Statický systém s pevnými hodnotami', 'Nelineární systém'],
                answer: 'Systém měnící se v diskrétních časových krocích'
            },
            {
                question: 'Jak se definuje stacionární trajektorie?',
                options: ['Trajektorie neměnná v čase', 'Trajektorie s pravidelnými změnami', 'Trajektorie závislá na vstupních parametrech', 'Trajektorie popsaná diferenciální rovnicí'],
                answer: 'Trajektorie neměnná v čase'
            },
            {
                question: 'Co je cílem analýzy diskrétních systémů?',
                options: ['Predikovat jejich chování', 'Vytvořit fyzický model', 'Optimalizovat parametry', 'Minimalizovat počet prvků'],
                answer: 'Predikovat jejich chování'
            },
            {
                question: 'Jaké jsou základní vlastnosti diskrétního dynamického systému?',
                options: ['Sekvenční vývoj, časové kroky', 'Lineární chování, rychlost', 'Statické parametry, jednoduchost', 'Nelineární výpočty, složitost'],
                answer: 'Sekvenční vývoj, časové kroky'
            },
            {
                question: 'Co znamená analýza konkrétního diskrétního systému?',
                options: ['Studium jeho parametrů a chování', 'Vytvoření fyzického modelu', 'Optimalizace algoritmů', 'Redukce vstupních dat'],
                answer: 'Studium jeho parametrů a chování'
            },
            {
                question: 'Jaké jsou příklady diskrétních dynamických systémů?',
                options: ['Výrobní linky, dopravní sítě', 'Elektrické obvody, mechanické stroje', 'Ekosystémy, chemické reakce', 'Softwarové algoritmy, fyzické prototypy'],
                answer: 'Výrobní linky, dopravní sítě'
            }
        ];
    }
}
