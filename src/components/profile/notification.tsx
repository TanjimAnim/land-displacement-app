import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../app/store";
import styled from "styled-components";
import { InfoCircleFill } from "@styled-icons/bootstrap/InfoCircleFill";
import { ErrorCircle } from "@styled-icons/fluentui-system-filled/ErrorCircle";
import { ErrorWarning } from "@styled-icons/remix-fill/ErrorWarning";
import { CircleCheck } from "@styled-icons/open-iconic/CircleCheck";
import { CloseOutline } from "@styled-icons/evaicons-outline/CloseOutline";

const Wrapper = styled.div`
  width: 309px;
`;

const NotificationDayBar = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #21272a;
  color: #f2f4f8;
  padding: 1rem;
`;

const NotificationMessage = styled.div`
  background: #f2f4f8;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1rem;
`;

const StatusTitle = styled.div`
  font-weight: bold;
  margin-bottom: 7px;
`;
const Message = styled.div`
  font-weight: 400;
  color: #121619;
  margin-bottom: 7px;
`;

const DateString = styled.div`
  font-weight: 400;
  color: #697077;
`;
const Container = styled.div`
  padding: 0.4rem;
  color: black;
`;

function NotificationWindow() {
  const notification: object[] = useSelector(
    (state: RootState) => state.area.notification
  );
  const date: Date = new Date();

  const day: number = date.getDate();

  return (
    <>
      <Wrapper>
        <NotificationDayBar>
          <div>Today</div>
          <div style={{ color: "#78A9FF" }}>Mark all as read</div>
        </NotificationDayBar>
        {notification.map((item: any) => {
          if (item.currentDay === day) {
            return (
              <>
                <NotificationMessage id={item.id}>
                  <Container>
                    {(() => {
                      if (item.status === "info") {
                        return <InfoCircleFill color='#0f62fe' width='16px' />;
                      }
                      if (item.status === "success") {
                        return <CircleCheck color='#24A148' width='16px' />;
                      }
                      if (item.status === "error") {
                        return <ErrorCircle color='#DA1E28' width='16px' />;
                      }
                      if (item.status === "warning") {
                        return <ErrorWarning color='#F1C21B' width='16px' />;
                      }
                    })()}
                  </Container>
                  <Container>
                    <StatusTitle>
                      {(() => {
                        if (item.status === "info") {
                          return "Informational Notification";
                        }
                        if (item.status === "success") {
                          return "Success Notification";
                        }
                        if (item.status === "error") {
                          return "Error Notification";
                        }
                        if (item.status === "warning") {
                          return "Warning Notification";
                        }
                      })()}
                    </StatusTitle>
                    <Message>{item.message}</Message>
                    <DateString>{item.dateString}</DateString>
                  </Container>
                  <div>
                    <CloseOutline width='16px' color='black' />
                  </div>
                </NotificationMessage>
              </>
            );
          }
        })}
        <NotificationDayBar>
          <div>Yesterday</div>
        </NotificationDayBar>
        {notification.map((item: any) => {
          if (item.currentDay === day - 1) {
            return (
              <>
                <NotificationMessage id={item.id}>
                  <Container>
                    {(() => {
                      if (item.status === "info") {
                        return <InfoCircleFill color='#0f62fe' width='16px' />;
                      }
                      if (item.status === "success") {
                        return <CircleCheck color='#24A148' width='16px' />;
                      }
                      if (item.status === "error") {
                        return <ErrorCircle color='#DA1E28' width='16px' />;
                      }
                      if (item.status === "warning") {
                        return <ErrorWarning color='#F1C21B' width='16px' />;
                      }
                    })()}
                  </Container>
                  <Container>
                    <StatusTitle>
                      {(() => {
                        if (item.status === "info") {
                          return "Informational Notification";
                        }
                        if (item.status === "success") {
                          return "Success Notification";
                        }
                        if (item.status === "error") {
                          return "Error Notification";
                        }
                        if (item.status === "warning") {
                          return "Warning Notification";
                        }
                      })()}
                    </StatusTitle>
                    <Message>{item.message}</Message>
                    <DateString> {item.dateString}</DateString>
                  </Container>
                  <div>
                    <CloseOutline width='16px' color='black' />
                  </div>
                </NotificationMessage>
              </>
            );
          }
        })}
        <NotificationDayBar>
          <div>Older</div>
        </NotificationDayBar>
        {notification.map((item: any) => {
          if (item.currentDay === day - 2) {
            return (
              <>
                <NotificationMessage id={item.id}>
                  <Container>
                    {(() => {
                      if (item.status === "info") {
                        return <InfoCircleFill color='#0f62fe' width='16px' />;
                      }
                      if (item.status === "success") {
                        return <CircleCheck color='#24A148' width='16px' />;
                      }
                      if (item.status === "error") {
                        return <ErrorCircle color='#DA1E28' width='16px' />;
                      }
                      if (item.status === "warning") {
                        return <ErrorWarning color='#F1C21B' width='16px' />;
                      }
                    })()}
                  </Container>
                  <Container>
                    <StatusTitle>
                      {(() => {
                        if (item.status === "info") {
                          return "Informational Notification";
                        }
                        if (item.status === "success") {
                          return "Success Notification";
                        }
                        if (item.status === "error") {
                          return "Error Notification";
                        }
                        if (item.status === "warning") {
                          return "Warning Notification";
                        }
                      })()}
                    </StatusTitle>
                    <Message>{item.message}</Message>
                    <DateString>{item.dateString}</DateString>
                  </Container>
                  <div>
                    <CloseOutline width='16px' color='black' />
                  </div>
                </NotificationMessage>
              </>
            );
          }
        })}
      </Wrapper>
    </>
  );
}

export default NotificationWindow;
