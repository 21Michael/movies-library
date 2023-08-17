FROM postgres:latest

EXPOSE 5432

CMD ["psql", "-U", "$POSTGRES_USER", "-P", "$POSTGRES_PASSWORD", "-d", "$POSTGRES_DB"]
