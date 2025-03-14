
echo "Stopping containers..."
docker-compose down

echo "Removing database volume..."
docker volume rm $(docker volume ls -q | grep -E '_db_data$')

echo "Starting containers fresh..."
docker-compose up -d

echo "Database reset completed on $(date)"
