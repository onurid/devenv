#FROM microsoft/dotnet:2.2-aspnetcore-runtime

FROM microsoft/dotnet:2.2-sdk
WORKDIR /app

COPY /app/*.csproj ./
RUN dotnet restore

COPY /app/ ./
RUN dotnet publish -c Release -o out

ENV ASPNETCORE_URLS http://+:5000
EXPOSE 5000

ENTRYPOINT ["dotnet", "out/app.dll"]


