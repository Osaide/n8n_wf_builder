# n8n_wf_builder

Questo repository ha lo scopo di ospitare lo sviluppo di flussi **n8n**.

## Struttura delle branch

Il progetto prevede tre branch principali:

- **n8n_vm** – contiene il codice e la configurazione della macchina virtuale di n8n.
- **n8n_knowledge** – raccoglie documentazione e conoscenza riguardante n8n.
- **workflow_distillati** – ospita i workflow consolidati e pronti all'uso.

### Creazione delle branch

Per creare le branch e pubblicarle sul remoto si possono eseguire i seguenti comandi:

```bash
git checkout -b n8n_vm
git push -u origin n8n_vm

git checkout -b n8n_knowledge
git push -u origin n8n_knowledge

git checkout -b workflow_distillati
git push -u origin workflow_distillati
```

## Esecuzione dei test

Questo repository utilizza Node.js per gestire semplici script di test. Per eseguirli:

```bash
npm test
```

Il comando verifica la presenza di `readme.md` e può essere esteso in futuro per coprire altre funzionalità.
