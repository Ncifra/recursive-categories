#!/bin/bash
printf "Running migration in $NODE_ENV...\n"
printf "\n* Running Database Migrations *\n"
npm run db:migrate
printf "\n* Seeding Database *\n"
npm run db:seed
printf "\n* Starting Application *\n\n"
