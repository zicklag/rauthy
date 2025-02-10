import{u as t}from"./language.svelte.CTARpgqQ.js";let n={common:{account:"Account",back:"Zur\xFCck",copiedToClip:"Wert wurde in die Zwischenablage kopiert",copyToClip:"Wert in Zwischenablage kopieren",filter:"Filter",from:"Von",note:"Notiz",search:"Suchen",searchOptions:"Suchoptionen",until:"Bis"},docs:{book:"F\xFCr generelle Dokumentation f\xFCr Rauthy existiert das",encryption:"Verschl\xFCsselung",encKeys:{header:"Encryption Keys",keyActive:"Aktiver Key",keysAvailable:"Verf\xFCgbare Keys",migrate:"Migrieren",migrateToKey:"Migriere alle Werte zu folgendem Encryption Key",p1:`Diese Schl\xFCssel werden f\xFCr die zus\xE4tzliche Verschl\xFCsselung in verschiedenen Situationen genutzt, wie 
            z.B. gewisse Werte innerhalb der Datenbank oder Session Cookies. Sie sind statisch konfiguriert, aber k\xF6nnen
            als best-practice manuell rotiert werden.`,p2:`Der aktive Schl\xFCssel ist ebenfalls statisch im Rauthy config file gesetzt. Alle neu-verschl\xFCsselten
            Werte werden mit dem aktiven Schl\xFCssel verschl\xFCsselt, w\xE4hrend alte zur R\xFCckw\xE4rts-Kompatibilit\xE4t parallel
            existieren k\xF6nnen.`,p3:`Das Migrieren aller verschl\xFCsselten Werte an dieser Stelle kann, je nach System, einige Zeit in 
            Anspruch nehmen.`},hashing:{calculate:"Berechnen",currValuesHead:"Derzeitige Werte",currValues1:"Die derzeitigen im Backend konfigurierten Werte sind die folgenden:",currValuesNote:`Notiz: Die Login Zeit vom Backend wird nur dann eine gute Richtlinie sein, nachdem 
            mindestens 5 erfolgreiche Logins seit dem letzten Neustart gemacht wurden. Der Ausgangswert ist immer 
            2000 ms und wird mit jedem erfolgreichen Login neu gemittelt.`,currValuesThreadsAccess:"Threads (p_cost) die Rauthy zur Verf\xFCgung stehen",loginTimeHead:"Ein paar Worte zur Login Zeit",loginTime1:`Generell m\xF6chten User alles so schnell wie m\xF6glich. F\xFCr eine sichere Login Prozedur jedoch
            sollte mindestens eine Dauer von 500 - 1000 ms anvisiert werden and kein Problem darstellen. Die Zeit zum
            Passwort Hashing darf nicht zu kurz gew\xE4hlt werden, weil dadurch die St\xE4rke des Hashes reduziert werden 
            w\xFCrde.`,loginTime2:`Um standardm\xE4\xDFig gen\xFCgend Sicherheit zu gew\xE4hrleisten, erlaubt dieses Tool keine kleineren
            Werte als 500 ms f\xFCr die Login Zeit.`,mCost1:`Die <code>m_cost</code> definiert die Menga an <b>Speicher (in kB)</b> die zum Hashing verwendet
            wird. Je h\xF6her dieser Wert, umso besser (sicherer), aber die notwendigen Ressourcen m\xFCssen nat\xFCrlich 
            vorhanden sein.<br>
            Wenn z.B. 4 Passw\xF6rter zur selben Zeit gehasht werden, wird selbstverst\xE4ndlich <code>4 x m_cost</code>
            an Speicher ben\xF6tigt, was zu jeder Zeit zur Verf\xFCgung stehen muss.`,mCost2:`Den "richtigen" Wert f\xFCr <code>m_cost</code> zu finden ist gl\xFCcklicherweise sehr einfach. Definiere
            das Maximum an Speicher, das Rauthy nutzen sollte, dividiere die Menge durch die Anzahl paralleler Logins, 
            die m\xF6glich sein sollten (<code>MAX_HASH_THREADS</code>) und ziehe hier von eine gewisse statische Menge ab.
            Die H\xF6he des statisch ben\xF6tigten Speichers h\xE4ngt von der gew\xE4hlten Datenbank und Anzahl Benutzer ab, jedoch
            wird sie in den meisten F\xE4llen im Bereich von 32 - 96 MB sein.`,pCost1:`<code>p_cost</code> definiert den Parallelismus f\xFCrs Hashing.<br>
            In den meisten F\xE4llen erh\xF6hen Werte jenseits von 8 nichts mehr die ben\xF6tigte Zeit, weil der Algorithmus
            ges\xE4ttigt sein wird. Dies ist auch der Standardwert f\xFCr Rauthy.`,pCost2:`Die generelle Regel lautet:<br>
            Setze <code>p_cost</code> auf den zweifachen Wert der verf\xFCgbares CPU Kerne.<br>
            Wenn z.B. 4 Kerne zur Verf\xFCgung stehen, w\xE4re eine <code>p_cost</code> von 8 ein guter Wert.<br>
            Der Wert muss allerdings die maximale Anzahl parallel erlaubter Logins (<code>MAX_HASH_THREADS</code>) 
            ber\xFCcksichtigen und ggf. entsprechend reduziert werden.`,tCost1:`<code>t_cost</code> ist ein Multiplikator f\xFCr die <b>Zeit</b> f\xFCrs Hashing. Dies ist der einzige
            Wert, der durch Testen auf der Zielarchitektur gefunden werden muss, weil <code>m_cost</code> und 
            <code>p_cost</code> gewissenerma\xDFen vorgegeben sind.`,tCost2:`Das Finden des Wertes ist einfach: Setze <code>m_cost</code> und <code>p_cost</code> wie oben
            erkl\xE4rt und erh\xF6he <code>t_cost</code> so lange, bis die gew\xFCnschte Login Zeit erreicht wird.`,utilityHead:"Parameter Berechnungs-Werkzeug",utility1:`Das folgende Werkzeug kann zum Finden passender Werte f\xFCr dieses Rauthy deployment genutzt 
            werden. Da die Werte von sehr vielen Faktoren abh\xE4ngen, sollten dieser auf der finalen Architektur 
            eingestellt werden, am besten zu Zeiten der am h\xF6chsten erwarteten Last, um keine zu hohen Werte 
            einzustellen.`,utility2:`<code>m_cost</code> ist Optional und der als minimal sichere Wert von 32768 w\xFCrde automatisch
            gew\xE4hlt werden. Sollte <code>p_cost</code> ebenfalls nicht gegeben sein, so wird Rauthy die maximal 
            verf\xFCgbare Menge and Kernen nutzen.`,time:"Zeit",targetTime:"Ziel-Zeit",tune:"Wichtig: Diese Werten m\xFCssen auf der finalen Architektur eingestellt werden!",pDetials:`F\xFCr eine detailiertere Einf\xFChrung in den Argon2ID Alrogithmus stehen vielen Quellen online zur
            Verf\xFCgung. Hier werden nur ganz kurz die Werte erkl\xE4rt. Die folgenden drei Werte m\xFCssen konfiguriert werden:`,pTune:`Die Werte k\xF6nnen stark variieren in Abh\xE4ngigkeit vom System und der generellen Systemlast. Je 
            st\xE4rker das System, desto sicherere Werte k\xF6nnen gew\xE4hlt werden.`,pUtility:`Dieses Werkzeug ist eine Hilfe zum Finden der besten Argon2ID Werte f\xFCr das jeweilige System.
            Argon2ID is der derzeit sicherste, verf\xFCgbare Passwort Hashing Algorithmus. Um das volle Potential 
            aussch\xF6pfen zu k\xF6nnen, m\xFCssen die Werte allerdings auf das System angepasst werden.`,mCost3:"Der minimal erlaubte Wert f\xFCr <code>m_cost</code> ist <code>32768</code>."},openapi:"Zur Integration einer externen Applikation via Rauthy's API gibt es das",openapiNote:`In Abh\xE4ngigkeit von der Konfiguration ist das Swagger  UI nicht \xF6ffentlich zug\xE4nglich \xFCbber den
            oben genannten Link. Es ist allerdings (standardm\xE4\xDFig) \xFCber den internen metrics server verf\xFCgbar zur
            Reduzierung der Angriffsfl\xE4che.`,source:"Der source code kann hier gefunden werden"},error:{needsAdminRole:"Um Zugriff zu erhalten ist die Rolle <b>rauthy_admin</b> notwendig.",noAdmin:`F\xFCr Rauthy Admin Accounts ist <b>MFA Pflicht.</b><br>
            Im <b>Account</b> kann ein Passkey hinterlegt und MFA aktiviert werden.<br>
            Danach muss ein Logout und neuer Login folgen`},events:{eventLevel:"Event Level",eventType:"Event Typ"},jwks:{alg:"Algorithmus",p1:"Dies sind die Json Web Keys (JWKs) die f\xFCr das Signieren der Tokens genutzt werden.",p2:`JWKs werden standardm\xE4\xDFig automatisch an jedem 1. des Monats rotiert. F\xFCr alle neuen Tokens wird 
        immer die aktuellste Version eines Keys f\xFCr den jeweiligen Algorithmus verwerndet. Alte Keys werden f\xFCr 
        eine Weile behalten um bestehende Tokens validieren zu k\xF6nnen und nach einer gewissen Zeit automatisch gel\xF6scht.`,p3:`Die Keys k\xF6nnen manuell rotiert werden. Abh\xE4ngig von der Hardware auf der diese Rauthy Instanz l\xE4uft,
        kann dies einige Sekunden in Anspruch nehmen.`,type:"Typ",rotateKeys:"Keys Rotieren"},nav:{apiKeys:"API Keys",attributes:"Attribute",blacklist:"Blacklist",clients:"Clients",config:"Konfiguration",docs:"Dokumentation",events:"Events",groups:"Gruppen",providers:"Provider",roles:"Rollen",scopes:"Scopes",sessions:"Sessions",users:"Benutzer"},passwordPolicy:{configDesc:"Regeln f\xFCr neue Passw\xF6rter.",resetSet0:"Der Wert 0 deaktiviert die Bedingung.",validForDays:"G\xFCltigkeit Tage",validityNew:"G\xFCltigkeit f\xFCr neue Passw\xF6rter."},search:{orderBy:"Sortieren nach ...",orderChangeToAsc:"Zu aufsteigender Sortierung wechseln",orderChangeToDesc:"Zu absteigende Sortierung wechseln"}},i={common:{account:"Account",back:"Back",copiedToClip:"Value has been copied to clipboard",copyToClip:"Copy value to clipboard",filter:"Filter",from:"From",note:"Note",search:"Search",searchOptions:"Search Options",until:"Until"},docs:{book:"For general documentation about Rauthy itself, you should take a look at the",encryption:"Encryption",encKeys:{header:"Encryption Keys",keyActive:"Active Key",keysAvailable:"Available Keys",migrate:"Migrate",migrateToKey:"Migrate all existing encrypted values to the following key",p1:`These Keys are used for an additional encryption at rest, independently from any data store technology 
            used under the hood. They are configured statically, but can be rotated and migrated on this page manually.`,p2:`The active key is statically set in the Rauthy config file / environment variables. It cannot be changed
            here dynamically. All new JWK encryption's will always use the currently active key.`,p3:`If you migrate all existing secrets, it might take a few seconds to finish, if you have a big 
            dataset.`},hashing:{calculate:"Calculate",currValuesHead:"Current values",currValues1:"The current values from the backend are the following:",currValuesNote:`Note: The Login Time from the backend does only provide a good guideline after at least 5 
            successful logins, after Rauthy has been started. The base value is always 2000 ms after a fresh restart 
            and will adjust over time with each successful login.`,currValuesThreadsAccess:"Threads (p_cost) Rauthy has access to",loginTimeHead:"A word about Login Time",loginTime1:`Generally, users want everything as fast as possible. When doing a safe login though, a time 
            between 500 - 1000 ms should not be a problem. The login time must not be too short, since it would lower 
            the strength of the hash, of course.`,loginTime2:`To provide as much safety by default as possible, this utility does not allow you to go below 
            500 ms for the login time.`,mCost1:`The <code>m_cost</code> defines the amount of <b>memory (in kB)</b>, which is used for the hashing.
            The higher the value, the better, of course. But you need to keep in mind the servers resources.<br>
            When you hash 4 passwords at the same time, for instance, the backend needs <code>4 x m_cost</code>
            during the hashing. These resources must be available.`,mCost2:`Tuning <code>m_cost</code> is pretty easy. Define the max amount of memory that Rauthy should use,
            divide it by the number of max allowed parallel logins (<code>MAX_HASH_THREADS</code>) and subtract a small 
            static amount of memory. How much static memory should be taken into account depends on the used database
            and the total amount of users, but will typically be in the range of 32 - 96 MB.`,mCost3:"The minimal allowed <code>m_cost</code> is <code>32768</code>.",pCost1:`The <code>p_cost</code> defines the amount of <b>parallelism</b> for hashing. This value most often 
            tops out at ~8, which is the default for Rauthy.`,pCost2:`The general rule is:<br>
            Set the <code>p_cost</code> to twice the size of cores your have available.<br>
            For instance, if you have 4 cores available, set the <code>p_cost</code> to <code>8</code>.<br>
            However, this value must take the configured allowed parallel logins (<code>MAX_HASH_THREADS</code>) into
            account and be reduced accordingly.`,tCost1:`The <code>t_cost</code> defines the amount of <b>time</b> for hashing. This value is actually the 
            only value, that needs tuning, since <code>m_cost</code> and <code>p_cost</code> are basically given by the 
            environment.`,tCost2:`Tuning is easy: Set <code>m_cost</code> and <code>p_cost</code> accordingly and then increase
            <code>t_cost</code> as long as you have not reached your hashing-time-goal.`,utilityHead:"Parameter Calculation Utility",utility1:`You can use this tool to approximate good values for your deployment. Keep in mind, that this 
            should be executed with Rauthy in its final place with all final resources available. You should execute 
            this utility during load to not over tune.`,utility2:`<code>m_cost</code> is optional and the safe minimal value of <code>32768</code> would be chosen, 
            if empty. <code>p_cost</code> is optional too and Rauthy will utilize all threads it can see, if empty.`,time:"Time",targetTime:"Target Time",tune:"Important: These values need to be tuned on the final architecture!",pDetials:`If you want a detailed introduction to Argon2ID, many sources exist online. This guide just 
            gives very short overview about the values. Three of them need to be configured:`,pTune:`They change depending on the capabilities of the system. The more powerful the system, the more safe 
            these values can be.`,pUtility:`This utility helps you find the best Argon2ID settings for your platform.
            Argon2ID is currently the safest available password hashing algorithm. To use it to its fullest potential, 
            it has to be tuned for each deployment.`},openapi:"If you want to integrate an external application and use Rauthy's API, take a look at the",openapiNote:`Depending on the backend configuration, the Swagger UI may not be exposed publicly at this point.
            It is however by default available via the internal metrics HTTP server to not expose any 
            information.`,source:"The source code can be found here"},error:{needsAdminRole:`You are not assigned to the <b>rauthy_admin</b> role.<br/>
            You do not have access to the admin panel.`,noAdmin:`A Rauthy admin account must have <b>MFA enabled.</b><br>
            Please navigate to your <b>account</b> and activate MFA.<br>
            Afterward, you need to do a logout and log back in.`},events:{eventLevel:"Event Level",eventType:"Event Type"},jwks:{alg:"Algorithm",p1:"These are the Json Web Keys (JWKs) used for token singing.",p2:`The JWKs will be rotated by default every 1st of a month. For all newly created tokens, only the latest
        available key for the given algorithm will be used for signing. Old keys will be kept for a while to make sure
        that currently valid tokens can still be validated properly. After a while, they will be cleaned up 
        automatically.`,p3:`Keys can also be rotated manually. Depending on the hardware this Rauthy instance is running on, it might
        take a few seconds.`,type:"Type",rotateKeys:"Rotate Keys"},nav:{apiKeys:"API Keys",attributes:"Attributes",blacklist:"Blacklist",clients:"Clients",config:"Config",docs:"Docs",events:"Events",groups:"Groups",providers:"Providers",roles:"Roles",scopes:"Scopes",sessions:"Sessions",users:"Users"},passwordPolicy:{configDesc:"Policy for new passwords.",resetSet0:"The value 0 deactivates the requirement.",validForDays:"Valid For Days",validityNew:"Validity for new passwords."},search:{orderBy:"Order by ...",orderChangeToAsc:"Change sort to ascending",orderChangeToDesc:"Change sort to descending"}},e;function s(){return e}function r(){switch(t()){case"de":e=n;break;default:e=i;break}}export{r as i,s as u};
